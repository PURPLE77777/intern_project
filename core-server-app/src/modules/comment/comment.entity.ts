import { Post } from 'modules/post/post.entity';
import { BaseEntity } from 'share/base';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('comments')
export class Comment extends BaseEntity {
  @Column({
    type: 'varchar',
  })
  text: string;

  @Column({
    name: 'reply_to_id',
    type: 'uuid',
    nullable: true,
  })
  replyToId?: string;

  @ManyToOne(() => Post, post => post.comments)
  post: Post;
}
