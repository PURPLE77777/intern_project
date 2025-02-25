import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from 'database/database.module';
import { ProfileModule } from 'modules/profile/profile.module';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule, forwardRef(() => ProfileModule)],
  providers: [...userProviders, UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
