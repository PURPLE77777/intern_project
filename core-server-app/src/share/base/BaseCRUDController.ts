import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { DeepPartial, FindManyOptions } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { BaseCRUDService } from './BaseCRUDService';
import { BaseEntity } from './BaseEntity';

export abstract class BaseCRUDController<
  T extends BaseEntity,
  N extends DeepPartial<T>,
  B extends QueryDeepPartialEntity<T>,
> {
  constructor(protected readonly service: BaseCRUDService<T, N, B>) {}

  @Get()
  async getAll(@Query() query: FindManyOptions<T>): Promise<T[]> {
    return this.service.findAll(query);
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<T> {
    return this.service.findOne(id);
  }

  @Post()
  async create(@Body() data: N): Promise<T> {
    return this.service.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: B): Promise<T> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.service.remove(id);
  }
}
