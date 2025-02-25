import { createClient, RedisClientType, SetOptions } from 'redis';
import { CacheTime } from 'share/const';
import configService from './config.service';

export class RedisService {
  constructor(private readonly redis: RedisClientType) {
    redis.on('error', err => console.error('Redis Error:', err));

    this.connect();
  }

  private async connect() {
    try {
      await this.redis.connect();
    } catch (error) {
      console.error('Redis connection failed:', error);
    }
  }

  get(key: string) {
    return this.redis.get(key);
  }

  set(key: string, value: string, options: SetOptions = { EX: CacheTime }) {
    return this.redis.set(key, value, options);
  }

  delete(key: string | string[]) {
    return this.redis.del(key);
  }

  exists(key: string) {
    return this.redis.exists(key);
  }

  async close() {
    await this.redis.quit();
  }
}

export default new RedisService(
  createClient({
    url: `redis://${configService.get('HOST')}:${configService.get(
      'REDIS_PORT'
    )}`,
  })
);
