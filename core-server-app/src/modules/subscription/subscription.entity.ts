import { BaseEntity } from 'share/base';
import { Column, Entity } from 'typeorm';

@Entity('subscriptions')
export class Subscription extends BaseEntity {
	@Column({
		type: 'uuid',
	})
	subscriberId: string;

	@Column({
		type: 'uuid',
	})
	subscriptionId: string;

	@Column({
		type: 'boolean',
		default: false,
	})
	is_accepted: boolean;
}
