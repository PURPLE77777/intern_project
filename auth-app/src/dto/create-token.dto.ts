import { IsUUID } from 'class-validator';

export class CreateTokenDto {
  @IsUUID()
  profileId: string;
}
