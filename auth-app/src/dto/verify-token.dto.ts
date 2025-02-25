import { IsString, IsUUID } from 'class-validator';
import { BaseTokenDto } from 'share/base/base-token.dto';

export class VerifyTokenDto extends BaseTokenDto {
  @IsString()
  @IsUUID()
  profileId: string;
}
