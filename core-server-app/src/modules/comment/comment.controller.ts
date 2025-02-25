import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Routes } from 'share/consts';
import { IBaseCRUD } from 'share/interfaces';
import { FindManyOptions } from 'typeorm';
import { Comment } from './comment.entity';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller(Routes.Comment)
export class CommentController
  implements IBaseCRUD<Comment, CreateCommentDto, UpdateCommentDto>
{
  constructor(private readonly commentService: CommentService) {}
  @Get()
  getAll(@Query() query: FindManyOptions<Comment>) {
    return this.commentService.findAll(query);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.commentService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateCommentDto) {
    return this.commentService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCommentDto) {
    return this.commentService.update(id, dto);
  }

  remove(id: string) {
    return this.commentService.remove(id);
  }
}
