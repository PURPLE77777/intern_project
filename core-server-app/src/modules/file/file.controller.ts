import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Routes } from 'share/consts';
import { CreateFileDto } from './dto/create-file.dto';
import { FileService } from './file.service';

@Controller(Routes.Files)
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  uploadFile(
    @Body() dto: CreateFileDto,
    @UploadedFiles() files: Express.Multer.File[]
  ) {
    console.log('files', files);
  }
}
