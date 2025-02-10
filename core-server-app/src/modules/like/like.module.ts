import { Module } from '@nestjs/common';
import { DatabaseModule } from 'database/database.module';
import { PostModule } from 'modules/post/post.module';
import { ProfileModule } from 'modules/profile/profile.module';
import { LikeController } from './like.controller';
import { likeProviders } from './like.providers';
import { LikeService } from './like.service';

@Module({
  imports: [DatabaseModule, ProfileModule, PostModule],
  providers: [...likeProviders, LikeService],
  controllers: [LikeController],
})
export class LikeModule {}
