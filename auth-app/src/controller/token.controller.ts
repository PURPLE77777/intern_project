import { CreateTokenDto } from 'dto/create-token.dto';
import { VerifyTokenDto } from 'dto/verify-token.dto';
import { Request, Response } from 'express';
import redisService, { RedisService } from 'services/redis.service';
import tokenService, { TokenService } from 'services/token.service';

class TokenController {
  constructor(
    private readonly tokenService: TokenService,
    private readonly redisService: RedisService
  ) {}

  async create(req: Request, res: Response) {
    const dto: CreateTokenDto = req.body;

    const accessToken = this.tokenService.create(dto, { expiresIn: '10m' });
    const refreshToken = this.tokenService.create(dto, { expiresIn: '1h' });
    this.redisService.set(dto.profileId, refreshToken);

    res.json({ accessToken, refreshToken });
  }

  async verifyToken(req: Request, res: Response) {
    const { token, profileId }: VerifyTokenDto = req.body;

    const savedToken = await redisService.get(profileId);

    if (token === savedToken && this.tokenService.verify(token)) {
      res.send(this.tokenService.verify(token));
      return;
    }

    res.send('Invalid token');
  }
}

export default new TokenController(tokenService, redisService);
