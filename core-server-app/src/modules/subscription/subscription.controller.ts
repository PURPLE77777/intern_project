import { Controller } from '@nestjs/common';
import { BaseCRUDController } from 'share/base';
import { Routes } from 'share/consts';
import { Subscription } from './subscription.entity';
import { SubscriptionService } from './subscription.service';

@Controller(Routes.Subscription)
export class SubscriptionController extends BaseCRUDController<Subscription> {
	constructor(private readonly subscriptionService: SubscriptionService) {
		super(subscriptionService);
	}
}
