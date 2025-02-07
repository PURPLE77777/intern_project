import { BaseEntity } from 'share/base';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Role, Sex } from './const';
import { User } from 'modules/user/user.entity';
import { Post } from 'modules/post/post.entity';

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
	sex: Sex;

	@Column({
		type: 'enum',
		enum: Role,
		nullable: true,
	})
	role: Role;

	@Column({
		type: 'boolean',
		default: false,
	})
	is_blocked: boolean;

	@ManyToOne(() => User, user => user.profiles)
	user: User;

	@OneToMany(() => Post, post => post.profile)
	posts: Post[];
}
