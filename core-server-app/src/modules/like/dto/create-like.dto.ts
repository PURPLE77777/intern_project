import { IsUUID } from 'class-validator';
import { OmitProperties } from 'share/lib';
import { Like } from '../like.entity';

export class CreateLikeDto extends OmitProperties(Like) {
  @IsUUID()
  profileId: string;

  @IsUUID()
  postId: string;
}
