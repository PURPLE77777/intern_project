import { Post } from 'modules/post/post.entity';
import { User } from 'modules/user/user.entity';
import { BaseEntity } from 'share/base';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { Role, Sex } from './const';
import { Report } from 'modules/report/report.entity';
import { Notification } from 'modules/notification/notification.entity';
import { Chat } from 'modules/chat/chat.entity';

@Entity('profiles')
export class Profile extends BaseEntity {
  @Column({
    name: 'user_id',
    type: 'uuid',
  })
  userId: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  username: string;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'varchar',
  })
  surname: string;

  @Column({
    type: 'date',
  })
  birthday: Date;

  @Column({
    type: 'enum',
    enum: Sex,
    nullable: true,
  })
  sex?: Sex;

  @Column({
    type: 'enum',
    enum: Role,
    nullable: true,
  })
  role?: Role;

  @Column({
    name: 'is_blocked',
    type: 'boolean',
    default: false,
  })
  isBlocked?: boolean;

  @ManyToOne(() => User, user => user.profiles)
  user: User;

  @OneToMany(() => Post, post => post.profile)
  posts: Post[];

  @OneToMany(() => Report, report => report.profile)
  reports: Report[];

  @OneToMany(() => Notification, notification => notification.profile)
  notifications: Notification[];

  @ManyToMany(() => Chat, chat => chat.profiles)
  chats: Chat[];
}
