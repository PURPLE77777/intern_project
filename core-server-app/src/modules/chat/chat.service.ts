import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ProfileService } from 'modules/profile/profile.service';
import { BaseCRUDService } from 'share/base';
import { Repository } from 'typeorm';
import { Chat } from './chat.entity';
import { CHAT_REPOSITORY_TOKEN } from './chat.providers';
import { ChatErrorMessage } from './const';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Injectable()
export class ChatService extends BaseCRUDService<
  Chat,
  CreateChatDto,
  UpdateChatDto
> {
  constructor(
    @Inject(CHAT_REPOSITORY_TOKEN)
    private readonly chatRepository: Repository<Chat>,
    private readonly profileService: ProfileService
  ) {
    super(chatRepository);
  }

  async create(dto: CreateChatDto) {
    const { profileIds } = dto;

    const promises = profileIds.map(profileId =>
      this.profileService.findOrError(profileId)
    );

    try {
      const profiles = await Promise.all(promises);
      // const chat = this.chatRepository.create();

      // chat.profiles = profiles;

      return super.create(dto); // super.create(chat)
    } catch (e) {
      throw new Error(ChatErrorMessage.WentWrong);
    }
  }

  async findOrError(id: string) {
    const chat = await super.findOne(id);
    if (!chat) {
      throw new NotFoundException(ChatErrorMessage.NotFound);
    }
    return chat;
  }
}
