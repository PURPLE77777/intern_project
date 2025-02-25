import { Module } from '@nestjs/common';
import { DatabaseModule } from 'database/database.module';
import { ChatModule } from 'modules/chat/chat.module';
import { ProfileModule } from 'modules/profile/profile.module';
import { MessageGateway } from './message.gateway';
import { messageProviders } from './message.providers';

@Module({
  imports: [DatabaseModule, ProfileModule, ChatModule],
  providers: [...messageProviders, MessageGateway],
})
export class MessageModule {}
