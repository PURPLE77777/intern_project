import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ProfileService } from 'modules/profile/profile.service';
import { BaseCRUDService } from 'share/base';
import { Repository } from 'typeorm';
import { PostErrorMessage } from './const';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './post.entity';
import { POST_REPOSITORY_TOKEN } from './post.providers';

@Injectable()
export class PostService extends BaseCRUDService<
  Post,
  CreatePostDto,
  UpdatePostDto
> {
  constructor(
    @Inject(POST_REPOSITORY_TOKEN)
    private readonly postRepository: Repository<Post>,
    private readonly profileService: ProfileService
  ) {
    super(postRepository);
  }

  async create(dto: CreatePostDto) {
    const { profileId } = dto;

    await this.profileService.findOrError(profileId);

    return super.create(dto);
  }

  async findOrError(id: string, errorMessage?: string) {
    const post = await super.findOne(id);

    if (!post) {
      throw new NotFoundException(
        errorMessage || PostErrorMessage.PostNotFound
      );
    }

    return post;
  }
}
