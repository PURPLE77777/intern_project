import { Chat } from '../chat.entity';

export class UpdateChatDto
  implements
    Partial<Omit<Chat, 'id' | 'createdAt' | 'updatedAt' | 'profiles'>> {}
