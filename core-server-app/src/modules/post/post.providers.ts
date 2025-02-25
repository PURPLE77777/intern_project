import { Provider } from '@nestjs/common';
import { createRepositoryProvider } from 'share/lib';
import { Post } from './post.entity';

export const POST_REPOSITORY_TOKEN = 'POST_REPOSITORY';

export const postProviders: Provider[] = [
	createRepositoryProvider(Post, POST_REPOSITORY_TOKEN),
];
