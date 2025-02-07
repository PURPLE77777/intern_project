import { createRepositoryProvider } from 'share/lib';
import { User } from './user.entity';

export const USER_REPOSITORY_TOKEN = 'USER_REPOSITORY';

export const userProviders = [
	createRepositoryProvider(User, USER_REPOSITORY_TOKEN),
];
