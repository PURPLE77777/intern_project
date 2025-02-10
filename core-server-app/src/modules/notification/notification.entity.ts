import { Profile } from 'modules/profile/profile.entity';
import { BaseEntity } from 'share/base';
import { Column, Entity, ManyToOne } from 'typeorm';
import { NotificationType } from './const';

@Entity('notifications')
export class Notification extends BaseEntity {
  @Column({
    name: 'profile_id',
    type: 'uuid',
  })
  profileId: string;

  @Column({
    type: 'enum',
    enum: NotificationType,
  })
  type: NotificationType;

  @Column({
    name: 'is_viewed',
    type: 'boolean',
    default: false,
  })
  isViewed?: boolean;

  @ManyToOne(() => Profile, profile => profile.notifications)
  profile: Profile;
}
