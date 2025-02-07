import { Controller } from '@nestjs/common';
import { BaseCRUDController } from 'share/base';
import { Routes } from 'share/consts';
import { Post } from './post.entity';
import { PostService } from './post.service';

@Controller(Routes.Post)
export class PostController extends BaseCRUDController<Post> {
	constructor(private readonly postService: PostService) {
		super(postService);
	}
}
