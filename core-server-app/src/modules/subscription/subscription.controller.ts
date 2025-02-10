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
import { IBaseCRUD } from 'share/interfaces';
import { FindManyOptions } from 'typeorm';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { Subscription } from './subscription.entity';
import { SubscriptionService } from './subscription.service';

@Controller(Routes.Subscription)
export class SubscriptionController
  implements
    IBaseCRUD<Subscription, CreateSubscriptionDto, UpdateSubscriptionDto>
{
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Get()
  getAll(@Query() query: FindManyOptions<Subscription>) {
    return this.subscriptionService.findAll(query);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.subscriptionService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateSubscriptionDto) {
    return this.subscriptionService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSubscriptionDto) {
    return this.subscriptionService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriptionService.remove(id);
  }
}
