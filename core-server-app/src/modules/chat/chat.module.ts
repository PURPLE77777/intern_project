import { Module } from '@nestjs/common';
import { DatabaseModule } from 'database/database.module';
import { ProfileModule } from 'modules/profile/profile.module';
import { ChatController } from './chat.controller';
import { chatProviders } from './chat.providers';
import { ChatService } from './chat.service';

@Module({
  providers: [...chatProviders, ChatService],
  controllers: [ChatController],
  imports: [DatabaseModule, ProfileModule],
  exports: [ChatService],
})
export class ChatModule {}
