import { Post } from 'modules/post/post.entity';
import { BaseEntity } from 'share/base';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('likes')
export class Like extends BaseEntity {
  @Column({
    name: 'profile_id',
    type: 'uuid',
  })
  profileId: string;

  @Column({
    name: 'post_id',
    type: 'uuid',
  })
  postId: string;

  @ManyToOne(() => Post, post => post.likes)
  post: Post;
}
