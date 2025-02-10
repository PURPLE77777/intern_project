import { Module } from '@nestjs/common';
import { ConfigModule } from 'modules/config/config.module';
import { FileController } from './file.controller';
import { FileService } from './file.service';

@Module({
  imports: [ConfigModule],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
