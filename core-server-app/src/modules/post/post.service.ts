import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ProfileErrorMessages } from 'modules/profile/const';
import { ProfileService } from 'modules/profile/profile.service';
import { BaseCRUDService } from 'share/base';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/createPost.dto';
import { Post } from './post.entity';
import { POST_REPOSITORY_TOKEN } from './post.providers';

@Injectable()
export class PostService extends BaseCRUDService<Post> {
	constructor(
		@Inject(POST_REPOSITORY_TOKEN)
		private readonly postRepository: Repository<Post>,
		private readonly profileService: ProfileService
	) {
		super(postRepository);
	}

	async create(dto: CreatePostDto) {
		const { profileId } = dto;
		const profile = await this.profileService.findOne(profileId);

		if (!profile) {
			throw new NotFoundException(ProfileErrorMessages.ProfileNotFound);
		}

		return this.postRepository.save(dto);
	}
}
