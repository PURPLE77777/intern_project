import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from 'database/database.module';
import { UserModule } from 'modules/user/user.module';
import { ProfileController } from './profile.controller';
import { profileProviders } from './profile.providers';
import { ProfileService } from './profile.service';

@Module({
	imports: [DatabaseModule, forwardRef(() => UserModule)],
	providers: [...profileProviders, ProfileService],
	controllers: [ProfileController],
	exports: [ProfileService],
})
export class ProfileModule {}
