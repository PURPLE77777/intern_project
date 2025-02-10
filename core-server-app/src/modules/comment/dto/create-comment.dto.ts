import { OmitType } from '@nestjs/mapped-types';
import { IsOptional, IsString, IsUUID } from 'class-validator';
import { Comment } from '../comment.entity';

export class CreateCommentDto extends OmitType(Comment, [
  'id',
  'createdAt',
  'updatedAt',
  'post',
]) {
  @IsString()
  text: string;

  @IsOptional()
  @IsUUID()
  replyToId?: string;
}
