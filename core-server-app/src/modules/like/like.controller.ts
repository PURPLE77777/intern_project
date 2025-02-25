import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Routes } from 'share/consts';
import { IBaseCRUDController } from 'share/interfaces';
import { FindManyOptions } from 'typeorm';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { Like } from './like.entity';
import { LikeService } from './like.service';

@Controller(Routes.Likes)
export class LikeController
  implements IBaseCRUDController<Like, CreateLikeDto, UpdateLikeDto>
{
  constructor(private readonly likeService: LikeService) {}

  @Get()
  getAll(@Query() query: FindManyOptions<Like>) {
    return this.likeService.findAll(query);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.likeService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateLikeDto) {
    return this.likeService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateLikeDto) {
    return this.likeService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.likeService.remove(id);
  }
}
