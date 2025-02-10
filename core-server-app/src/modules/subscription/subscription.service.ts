import { Inject, Injectable } from '@nestjs/common';
import { ProfileService } from 'modules/profile/profile.service';
import { BaseCRUDService } from 'share/base';
import { Repository } from 'typeorm';
import { SubscriberErrorMessages } from './const';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { Subscription } from './subscription.entity';
import { SUBSCRIPTION_REPOSITORY_TOKEN } from './subscription.providers';

@Injectable()
export class SubscriptionService extends BaseCRUDService<
  Subscription,
  CreateSubscriptionDto,
  UpdateSubscriptionDto
> {
  constructor(
    @Inject(SUBSCRIPTION_REPOSITORY_TOKEN)
    private readonly subscriptionRepository: Repository<Subscription>,
    private readonly profileService: ProfileService
  ) {
    super(subscriptionRepository);
  }

  async create(dto: CreateSubscriptionDto) {
    const { subscriberId, subscriptionId } = dto;

    await this.profileService.findOrError(
      subscriberId,
      SubscriberErrorMessages.SubscriberNotFound
    );

    await this.profileService.findOrError(
      subscriptionId,
      SubscriberErrorMessages.SubscriptionNotFound
    );

    return super.create(dto);
  }
}
