import { Profile } from 'modules/profile/profile.entity';
import { BaseEntity } from 'share/base';
import { Entity, ManyToMany } from 'typeorm';

@Entity('chats')
export class Chat extends BaseEntity {
  @ManyToMany(() => Profile, profile => profile.chats)
  profiles: Profile[];
}
