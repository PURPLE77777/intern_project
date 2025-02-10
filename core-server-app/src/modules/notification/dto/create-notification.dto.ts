import { IsBoolean, IsEnum, IsOptional, IsUUID } from 'class-validator';
import { OmitProperties } from 'share/lib';
import { NotificationType } from '../const';
import { Notification } from '../notification.entity';

export class CreateNotificationDto extends OmitProperties(Notification) {
  @IsUUID()
  profileId: string;

  @IsEnum(NotificationType)
  type: NotificationType;

  @IsOptional()
  @IsBoolean()
  isViewed?: boolean;
}
