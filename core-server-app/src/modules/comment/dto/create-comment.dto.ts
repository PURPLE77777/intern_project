import { OmitType } from '@nestjs/mapped-types';
import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';
import { Comment } from '../comment.entity';

export class CreateCommentDto extends OmitType(Comment, [
  'id',
  'createdAt',
  'updatedAt',
  'post',
]) {
  @IsString()
  @MinLength(1)
  text: string;

  @IsOptional()
  @IsUUID()
  replyToId?: string;
}
