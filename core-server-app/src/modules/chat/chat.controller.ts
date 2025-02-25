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
import { FindManyOptions } from 'typeorm';
import { Chat } from './chat.entity';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Controller(Routes.Chats)
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  getAll(@Query() query: FindManyOptions<Chat>) {
    return this.chatService.findAll(query);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.chatService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateChatDto) {
    return this.chatService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateChatDto) {
    return this.chatService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatService.remove(id);
  }
}
