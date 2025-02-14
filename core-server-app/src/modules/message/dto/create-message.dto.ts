import { IsString, IsUUID, MinLength } from 'class-validator';
import { OmitProperties } from 'share/lib';
import { Message } from '../message.entity';

export class CreateMessageDto extends OmitProperties(Message) {
  @IsUUID()
  chatId: string;

  @IsUUID()
  profileId: string;

  @IsString()
  @MinLength(1)
  text: string;
}
