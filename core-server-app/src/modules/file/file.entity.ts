import { Post } from 'modules/post/post.entity';
import { BaseEntity } from 'share/base';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('files')
export class File extends BaseEntity {
  @Column({
    type: 'int',
  })
  size: number;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'varchar',
  })
  path: string;

  @Column({
    type: 'varchar',
  })
  type: string;

  @Column({
    name: 'message_id',
    type: 'uuid',
    nullable: true,
  })
  messageId?: string;

  @Column({
    name: 'post_id',
    type: 'uuid',
    nullable: true,
  })
  postId?: string;

  @ManyToOne(() => Post, post => post.files)
  post: Post;
}
