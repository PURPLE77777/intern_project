import { IsBoolean, IsOptional, IsUUID } from 'class-validator';
import { OmitProperties } from 'share/lib';
import { Subscription } from '../subscription.entity';

export class CreateSubscriptionDto extends OmitProperties(Subscription) {
  @IsUUID()
  subscriberId: string;

  @IsUUID()
  subscriptionId: string;

  @IsOptional()
  @IsBoolean()
  isAccepted?: boolean;
}
