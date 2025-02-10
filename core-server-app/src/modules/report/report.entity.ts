import { Profile } from 'modules/profile/profile.entity';
import { BaseEntity } from 'share/base';
import { Column, Entity, ManyToOne } from 'typeorm';
import { ReportCategory } from './const';
import { Post } from 'modules/post/post.entity';

@Entity('reports')
export class Report extends BaseEntity {
  @Column({
    name: 'profile_id',
    type: 'uuid',
    nullable: true,
  })
  profileId?: string;

  @Column({
    name: 'post_id',
    type: 'uuid',
    nullable: true,
  })
  postId?: string;

  @Column({
    type: 'enum',
    enum: ReportCategory,
  })
  category: ReportCategory;

  @Column({
    type: 'varchar',
  })
  description?: string;

  @ManyToOne(() => Profile, profile => profile.reports, {
    cascade: true,
  })
  profile: Profile;

  @ManyToOne(() => Post, post => post.reports)
  post: Post;
}
