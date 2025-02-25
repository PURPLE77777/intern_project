import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { OmitProperties } from 'share/lib';
import { File } from '../file.entity';

export class CreateFileDto extends OmitProperties(File) {
  @IsNumber()
  size: number;

  @IsString()
  name: string;

  @IsString()
  path: string;

  @IsString()
  type: string;

  @IsOptional()
  @IsUUID()
  messageId?: string;

  @IsOptional()
  @IsUUID()
  postId?: string;
}
