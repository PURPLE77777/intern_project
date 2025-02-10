import { BaseEntity } from 'share/base';
import { Column, Entity } from 'typeorm';

@Entity('subscriptions')
export class Subscription extends BaseEntity {
  @Column({
    name: 'subscriber_id',
    type: 'uuid',
  })
  subscriberId: string;

  @Column({
    name: 'subscription_id',
    type: 'uuid',
  })
  subscriptionId: string;

  @Column({
    name: 'is_accepted',
    type: 'boolean',
    default: false,
  })
  isAccepted?: boolean;
}
