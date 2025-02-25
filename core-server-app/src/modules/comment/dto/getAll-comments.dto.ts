import { IsOptional, IsUUID } from 'class-validator';
import { BaseFindManyDto } from 'share/base';

export class GetAllCommentsDto extends BaseFindManyDto {
  @IsOptional()
  @IsUUID()
  commentId?: string;

  @IsOptional()
  @IsUUID()
  postId?: string;
}
