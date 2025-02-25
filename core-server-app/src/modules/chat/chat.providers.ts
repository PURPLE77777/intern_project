import { Provider } from '@nestjs/common';
import { createRepositoryProvider } from 'share/lib';
import { Chat } from './chat.entity';

export const CHAT_REPOSITORY_TOKEN = 'CHAT_REPOSITORY';

export const chatProviders: Provider[] = [
  createRepositoryProvider(Chat, CHAT_REPOSITORY_TOKEN),
];
