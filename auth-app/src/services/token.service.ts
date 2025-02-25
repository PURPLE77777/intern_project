import jwt, { SignOptions } from 'jsonwebtoken';
import { PayloadType } from 'share/types/payload.type';
import configService, { ConfigService } from './config.service';

export class TokenService {
  private SECRET_KEY: string;

  private readonly jwt: typeof jwt;

  constructor(configService: ConfigService) {
    this.jwt = jwt;

    this.SECRET_KEY = configService.get('SECRET_KEY');
  }

  create(payload: PayloadType, options: SignOptions) {
    return this.jwt.sign(payload, this.SECRET_KEY, options);
  }

  verify(token: string) {
    return this.jwt.verify(token, this.SECRET_KEY);
  }
}

export default new TokenService(configService);
