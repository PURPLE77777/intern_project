import { NotFoundException } from '@nestjs/common';
import { buildFindOptions } from 'share/lib';
import { DeepPartial, FindManyOptions, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseCRUDService<T> {
	constructor(protected readonly repository: Repository<T>) {}

	async findAll(query?: any): Promise<T[]> {
		const options: FindManyOptions<T> = buildFindOptions<T>(query || {});
		return this.repository.find(options);
	}

	async findOne(id: string): Promise<T> {
		const entity = await this.repository.findOne({ where: { id } } as any);
		if (!entity) {
			throw new NotFoundException(`Entity with id ${id} not found`);
		}
		return entity;
	}

	async create(data: DeepPartial<T>): Promise<T> {
		return this.repository.save(data);
	}

	async update(id: string, data: QueryDeepPartialEntity<T>): Promise<T> {
		await this.findOne(id);
		await this.repository.update(id, data);
		return this.findOne(id);
	}

	async remove(id: string): Promise<void> {
		await this.findOne(id);
		await this.repository.delete(id);
	}
}
