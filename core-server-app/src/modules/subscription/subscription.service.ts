import { Inject, Injectable } from '@nestjs/common';
import { ProfileService } from 'modules/profile/profile.service';
import { BaseCRUDService } from 'share/base';
import { Repository } from 'typeorm';
import { CreateSubscriptionDto } from './dto/createSubscription.dto';
import { Subscription } from './subscription.entity';
import { SUBSCRIPTION_REPOSITORY_TOKEN } from './subscription.providers';

@Injectable()
export class SubscriptionService extends BaseCRUDService<Subscription> {
	constructor(
		@Inject(SUBSCRIPTION_REPOSITORY_TOKEN)
		private readonly subscriptionRepository: Repository<Subscription>,
		private readonly profileService: ProfileService
	) {
		super(subscriptionRepository);
	}

	async create(dto: CreateSubscriptionDto) {
		const { subscriberId, subscriptionId } = dto;

		await this.profileService.findOne(subscriberId);
		await this.profileService.findOne(subscriptionId);

		return this.subscriptionRepository.save(dto);
	}
}
