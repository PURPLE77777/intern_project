import { PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { PostCategory } from '../const';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @IsOptional()
  @IsEnum(PostCategory)
  category: PostCategory;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  shared?: number;

  @IsOptional()
  @IsString()
  title: string;
}
