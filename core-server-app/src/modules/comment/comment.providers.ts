import { Provider } from '@nestjs/common';
import { createRepositoryProvider } from 'share/lib';
import { Comment } from './comment.entity';

export const COMMENT_REPOSITORY_TOKEN = 'COMMENT_REPOSITORY';

export const commentProviders: Provider[] = [
  createRepositoryProvider(Comment, COMMENT_REPOSITORY_TOKEN),
];
