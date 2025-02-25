import { Inject, Injectable } from '@nestjs/common';
import { PostService } from 'modules/post/post.service';
import { ProfileService } from 'modules/profile/profile.service';
import { BaseCRUDService } from 'share/base';
import { Repository } from 'typeorm';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { Like } from './like.entity';
import { LIKE_REPOSITORY_TOKEN } from './like.providers';

@Injectable()
export class LikeService extends BaseCRUDService<
  Like,
  CreateLikeDto,
  UpdateLikeDto
> {
  constructor(
    @Inject(LIKE_REPOSITORY_TOKEN)
    private readonly likeRepository: Repository<Like>,
    private readonly profileService: ProfileService,
    private readonly postService: PostService
  ) {
    super(likeRepository);
  }

  async create(dto: CreateLikeDto) {
    const { postId, profileId } = dto;

    await this.profileService.findOrError(profileId);
    await this.postService.findOrError(postId);

    return super.create(dto);
  }
}
