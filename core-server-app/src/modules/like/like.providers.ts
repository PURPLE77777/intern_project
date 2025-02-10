import { Provider } from '@nestjs/common';
import { createRepositoryProvider } from 'share/lib';
import { Like } from './like.entity';

export const LIKE_REPOSITORY_TOKEN = 'LIKE_REPOSITORY';

export const likeProviders: Provider[] = [
  createRepositoryProvider(Like, LIKE_REPOSITORY_TOKEN),
];
