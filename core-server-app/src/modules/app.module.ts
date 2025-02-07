import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { HashModule } from './hash/hash.module';
import { PostModule } from './post/post.module';
import { ProfileModule } from './profile/profile.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { UserModule } from './user/user.module';

@Module({
	imports: [
		ConfigModule,
		HashModule,
		UserModule,
		ProfileModule,
		PostModule,
		SubscriptionModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
