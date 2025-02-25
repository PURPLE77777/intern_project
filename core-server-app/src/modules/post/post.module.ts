import { Module } from '@nestjs/common';
import { DatabaseModule } from 'database/database.module';
import { ProfileModule } from 'modules/profile/profile.module';
import { PostController } from './post.controller';
import { postProviders } from './post.providers';
import { PostService } from './post.service';

@Module({
	imports: [DatabaseModule, ProfileModule],
	controllers: [PostController],
	providers: [...postProviders, PostService],
	exports: [PostService],
})
export class PostModule {}
