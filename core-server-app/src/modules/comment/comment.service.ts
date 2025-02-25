import { Inject } from '@nestjs/common';
import { PostService } from 'modules/post/post.service';
import { NotFoundError } from 'rxjs';
import { BaseCRUDService } from 'share/base';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { COMMENT_REPOSITORY_TOKEN } from './comment.providers';
import { CommentErrorMessage } from './const';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

export class CommentService extends BaseCRUDService<
  Comment,
  CreateCommentDto,
  UpdateCommentDto
> {
  constructor(
    @Inject(COMMENT_REPOSITORY_TOKEN)
    private readonly commentRepository: Repository<Comment>,
    private readonly postService: PostService
  ) {
    super(commentRepository);
  }

  async create(dto: CreateCommentDto) {
    const { replyToId } = dto;
    await this.findOrError(replyToId);
    return super.create(dto);
  }

  async findOrError(id: string) {
    const comment = await super.findOne(id);
    if (!comment) {
      throw new NotFoundError(CommentErrorMessage.NotFound);
    }
    return comment;
  }
}
