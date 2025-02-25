import { Module } from '@nestjs/common';
import { DatabaseModule } from 'database/database.module';
import { PostModule } from 'modules/post/post.module';
import { CommentController } from './comment.controller';
import { commentProviders } from './comment.providers';
import { CommentService } from './comment.service';

@Module({
  controllers: [CommentController],
  imports: [DatabaseModule, PostModule],
  providers: [...commentProviders, CommentService],
})
export class CommentModule {}
