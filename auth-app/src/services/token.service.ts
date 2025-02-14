import jwt, { SignOptions } from 'jsonwebtoken';
import { PayloadType } from 'share/types/payload.type';

export class TokenService {
  private readonly SECRET_KEY = 'SECRET';

  private readonly jwt: typeof jwt;

  constructor() {
    this.jwt = jwt;
  }

  create(payload: PayloadType, options: SignOptions) {
    return this.jwt.sign(payload, this.SECRET_KEY, options);
  }

  verify(token: string) {
    return this.jwt.verify(token, this.SECRET_KEY);
  }
}

export default new TokenService();
