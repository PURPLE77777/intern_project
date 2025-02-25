import { IsString } from 'class-validator';

export class BaseTokenDto {
  @IsString()
  token: string;
}
