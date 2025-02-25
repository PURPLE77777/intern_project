import { Provider } from '@nestjs/common';
import { createRepositoryProvider } from 'share/lib';
import { Notification } from './notification.entity';

export const NOTIFICATION_REPOSITORY_TOKEN = 'NOTIFICATION_REPOSITORY';

export const notificationProviders: Provider[] = [
  createRepositoryProvider(Notification, NOTIFICATION_REPOSITORY_TOKEN),
];
