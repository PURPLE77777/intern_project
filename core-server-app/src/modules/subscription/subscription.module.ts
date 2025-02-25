import { Module } from '@nestjs/common';
import { SubscriptionController } from './subscription.controller';
import { subscriptionProviders } from './subscription.providers';
import { SubscriptionService } from './subscription.service';
import { DatabaseModule } from 'database/database.module';
import { ProfileModule } from 'modules/profile/profile.module';

@Module({
	controllers: [SubscriptionController],
	imports: [DatabaseModule, ProfileModule],
	providers: [...subscriptionProviders, SubscriptionService],
})
export class SubscriptionModule {}
