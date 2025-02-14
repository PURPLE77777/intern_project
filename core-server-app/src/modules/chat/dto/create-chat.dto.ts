import { IsUUID, MinLength } from 'class-validator';
import { OmitProperties } from 'share/lib';
import { Chat } from '../chat.entity';

export class CreateChatDto extends OmitProperties(Chat) {
  @IsUUID('all', {
    each: true,
  })
  @MinLength(1)
  profileIds: string[];
}
