import { IsString, IsUUID } from 'class-validator';
import { OmitProperties } from 'share/lib';
import { Message } from '../message.entity';

export class CreateMessageDto extends OmitProperties(Message) {
  @IsUUID()
  chatId: string;

  @IsUUID()
  profileId: string;

  @IsString()
  text: string;
}
