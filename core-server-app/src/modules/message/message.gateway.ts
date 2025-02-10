import { Inject } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { ChatService } from 'modules/chat/chat.service';
import { ProfileService } from 'modules/profile/profile.service';
import { WSNamespace } from 'share/consts';
import { Repository } from 'typeorm';
import { WSEvent } from './const';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './message.entity';
import { MESSAGE_REPOSITORY_TOKEN } from './message.providers';

@WebSocketGateway(80, {
  cors: true,
  namespace: WSNamespace.Chat,
  transports: ['websocket'],
})
export class MessageGateway {
  constructor(
    @Inject(MESSAGE_REPOSITORY_TOKEN)
    private readonly messageRepository: Repository<Message>,
    private readonly profileService: ProfileService,
    private readonly chatService: ChatService
  ) {}

  @SubscribeMessage(WSEvent.Message)
  handleJoin() {}

  @SubscribeMessage(WSEvent.Message)
  async handleMessage(@MessageBody() dto: CreateMessageDto) {
    const { chatId, profileId } = dto;

    const [chat, profile] = await Promise.all([
      this.chatService.findOrError(chatId),
      this.profileService.findOrError(profileId),
    ]);

    return this.messageRepository.save(dto);
  }
}
