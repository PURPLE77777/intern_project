import { Injectable } from '@nestjs/common';
import { existsSync, mkdirSync } from 'fs';
import { ConfigService } from 'modules/config/config.service';
import { join } from 'path';

@Injectable()
export class FileService {
  private filesDir: string;

  constructor(private readonly configService: ConfigService) {
    const filesPath = join(__dirname + configService.get('FILE_PATH'));

    if (existsSync(filesPath)) {
      this.filesDir = mkdirSync(filesPath, { recursive: true });
    }
  }

  getFilePath(filename: string): string {
    return join(this.filesDir, filename);
  }
}
