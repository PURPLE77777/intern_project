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
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notification } from './notification.entity';
import { NotificationService } from './notification.service';

@Controller(Routes.Notifications)
export class NotificationController
  implements
    IBaseCRUDController<
      Notification,
      CreateNotificationDto,
      UpdateNotificationDto
    >
{
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  getAll(@Query() query: FindManyOptions<Notification>) {
    return this.notificationService.findAll(query);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.notificationService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateNotificationDto) {
    return this.notificationService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateNotificationDto) {
    return this.notificationService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationService.remove(id);
  }
}
