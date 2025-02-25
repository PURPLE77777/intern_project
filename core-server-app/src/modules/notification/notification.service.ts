import { Inject, Injectable } from '@nestjs/common';
import { ProfileService } from 'modules/profile/profile.service';
import { BaseCRUDService } from 'share/base';
import { Repository } from 'typeorm';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notification } from './notification.entity';
import { NOTIFICATION_REPOSITORY_TOKEN } from './notification.providers';

@Injectable()
export class NotificationService extends BaseCRUDService<
  Notification,
  CreateNotificationDto,
  UpdateNotificationDto
> {
  constructor(
    @Inject(NOTIFICATION_REPOSITORY_TOKEN)
    private readonly notificationRepository: Repository<Notification>,
    private readonly profileService: ProfileService
  ) {
    super(notificationRepository);
  }

  async create(dto: CreateNotificationDto) {
    const { profileId } = dto;

    await this.profileService.findOrError(profileId);

    return super.create(dto);
  }
}
