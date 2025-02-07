import { BaseEntity } from 'share/base';
import { Column, Entity, ManyToOne } from 'typeorm';
import { PostCategory } from './const';
import { POST_SHARED } from './const/postFields.const';
import { Profile } from 'modules/profile/profile.entity';

@Entity('posts')
export class Post extends BaseEntity {
	@Column({
		type: 'varchar',
	})
	title: string;

	@Column({
		type: 'varchar',
		default: '',
	})
	description: string;

	@Column({
		type: 'integer',
		default: POST_SHARED,
	})
	shared: number;

	@Column({
		type: 'varchar',
		enum: PostCategory,
	})
	category: PostCategory;

	@ManyToOne(() => Profile, profile => profile.posts)
	profile: Profile;
}
