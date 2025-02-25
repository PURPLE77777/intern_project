import { Provider } from '@nestjs/common';
import { createRepositoryProvider } from 'share/lib';
import { Profile } from './profile.entity';

export const PROFILE_REPOSITORY_TOKEN = 'PROFILE_REPOSITORY';

export const profileProviders: Provider[] = [
	createRepositoryProvider(Profile, PROFILE_REPOSITORY_TOKEN),
];
