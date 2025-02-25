import { BaseEntity } from 'share/base';
import { Column, Entity } from 'typeorm';

@Entity('messages')
export class Message extends BaseEntity {
  @Column({
    type: 'varchar',
  })
  text: string;

  @Column({
    name: 'profile_id',
    type: 'uuid',
  })
  profileId: string;

  @Column({
    name: 'chat_id',
    type: 'varchar',
  })
  chatId: string;
}
