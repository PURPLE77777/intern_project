import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BaseCRUDService } from './BaseCRUDService';

export abstract class BaseCRUDController<T> {
	constructor(protected readonly service: BaseCRUDService<T>) {}

	@Get()
	async getAll(@Query() query: any): Promise<T[]> {
		return this.service.findAll(query);
	}

	@Get(':id')
	async getOne(@Param('id') id: string): Promise<T> {
		return this.service.findOne(id);
	}

	@Post()
	async create(@Body() data: any): Promise<T> {
		return this.service.create(data);
	}

	@Put(':id')
	async update(@Param('id') id: string, @Body() data: any): Promise<T> {
		return this.service.update(id, data);
	}

	@Delete(':id')
	async remove(@Param('id') id: string): Promise<void> {
		return this.service.remove(id);
	}
}
