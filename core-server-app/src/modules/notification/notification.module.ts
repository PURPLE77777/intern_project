import { Module } from '@nestjs/common';
import { DatabaseModule } from 'database/database.module';
import { ProfileModule } from 'modules/profile/profile.module';
import { NotificationController } from './notification.controller';
import { notificationProviders } from './notification.providers';
import { NotificationService } from './notification.service';

@Module({
  controllers: [NotificationController],
  imports: [DatabaseModule, ProfileModule],
  providers: [...notificationProviders, NotificationService],
})
export class NotificationModule {}
