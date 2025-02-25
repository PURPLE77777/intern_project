import { Comment } from 'modules/comment/comment.entity';
import { Like } from 'modules/like/like.entity';
import { Profile } from 'modules/profile/profile.entity';
import { Report } from 'modules/report/report.entity';
import { BaseEntity } from 'share/base';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { PostCategory } from './const';
import { POST_SHARED } from './const/postFields.const';
import { File } from 'modules/file/file.entity';

@Entity('posts')
export class Post extends BaseEntity {
  @Column({
    type: 'varchar',
  })
  title: string;

  @Column({
    type: 'varchar',
  })
  description?: string;

  @Column({
    type: 'integer',
    default: POST_SHARED,
  })
  shared?: number;

  @Column({
    type: 'enum',
    enum: PostCategory,
  })
  category: PostCategory;

  @ManyToOne(() => Profile, profile => profile.posts)
  profile: Profile;

  @OneToMany(() => Report, report => report.post)
  reports: Report[];

  @OneToMany(() => Comment, comment => comment.post)
  comments: Comment[];

  @OneToMany(() => Like, like => like.post)
  likes: Like[];

  @OneToMany(() => File, file => file.post)
  files: File[];
}
