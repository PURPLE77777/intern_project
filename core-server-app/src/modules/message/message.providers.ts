import { Provider } from '@nestjs/common';
import { createRepositoryProvider } from 'share/lib';
import { Message } from './message.entity';

export const MESSAGE_REPOSITORY_TOKEN = 'MESSAGE_REPOSITORY';

export const messageProviders: Provider[] = [
  createRepositoryProvider(Message, MESSAGE_REPOSITORY_TOKEN),
];
