import { IsUUID } from 'class-validator';
import { OmitBaseEntityProperties } from 'share/lib';
import { Subscription } from '../subscription.entity';

export class CreateSubscriptionDto extends OmitBaseEntityProperties(
	Subscription,
	['is_accepted']
) {
	@IsUUID()
	subscriberId: string;

	@IsUUID()
	subscriptionId: string;
}
