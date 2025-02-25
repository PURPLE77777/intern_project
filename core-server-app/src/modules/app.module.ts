import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { CommentModule } from './comment/comment.module';
import { ConfigModule } from './config/config.module';
import { FileModule } from './file/file.module';
import { LikeModule } from './like/like.module';
import { MessageModule } from './message/message.module';
import { NotificationModule } from './notification/notification.module';
import { PostModule } from './post/post.module';
import { ProfileModule } from './profile/profile.module';
import { ReportModule } from './report/report.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule,
    UserModule,
    ProfileModule,
    PostModule,
    SubscriptionModule,
    LikeModule,
    NotificationModule,
    ReportModule,
    ChatModule,
    CommentModule,
    MessageModule,
    FileModule,
  ],
})
export class AppModule {}
