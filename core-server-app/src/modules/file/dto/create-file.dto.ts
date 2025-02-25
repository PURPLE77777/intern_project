import { IsNumber, IsString, IsUUID } from 'class-validator';
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

  @IsUUID()
  messageId?: string;

  @IsUUID()
  postId: string;
}
