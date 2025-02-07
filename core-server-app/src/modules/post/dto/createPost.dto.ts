import {
	IsEnum,
	IsNumber,
	IsOptional,
	IsString,
	IsUUID,
} from 'class-validator';
import { OmitBaseEntityProperties } from 'share/lib';
import { PostCategory } from '../const';
import { Post } from '../post.entity';

export class CreatePostDto extends OmitBaseEntityProperties(Post) {
	@IsEnum(PostCategory)
	category: PostCategory;

	@IsOptional()
	@IsString()
	description: string;

	@IsOptional()
	@IsNumber()
	shared: number;

	@IsString()
	title: string;

	@IsUUID()
	profileId: string;
}
