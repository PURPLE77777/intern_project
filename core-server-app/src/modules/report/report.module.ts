import { Module } from '@nestjs/common';
import { DatabaseModule } from 'database/database.module';
import { ReportController } from './report.controller';
import { reportProviders } from './report.providers';
import { ReportService } from './report.service';
import { PostModule } from 'modules/post/post.module';
import { ProfileModule } from 'modules/profile/profile.module';

@Module({
  controllers: [ReportController],
  imports: [DatabaseModule, PostModule, ProfileModule],
  providers: [...reportProviders, ReportService],
})
export class ReportModule {}
