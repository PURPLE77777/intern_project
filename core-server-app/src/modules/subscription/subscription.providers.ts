import { Provider } from '@nestjs/common';
import { createRepositoryProvider } from 'share/lib';
import { Subscription } from './subscription.entity';

export const SUBSCRIPTION_REPOSITORY_TOKEN = 'SUBSCRIPTION_TOKEN';

export const subscriptionProviders: Provider[] = [
	createRepositoryProvider(Subscription, SUBSCRIPTION_REPOSITORY_TOKEN),
];
