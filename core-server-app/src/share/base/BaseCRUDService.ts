import { NotFoundException } from '@nestjs/common';
import {
  DeepPartial,
  FindManyOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { BaseEntity } from './BaseEntity';

export abstract class BaseCRUDService<
  Entity extends BaseEntity,
  PartialEntity extends DeepPartial<Entity>,
  QueryEntity extends QueryDeepPartialEntity<Entity>,
> {
  constructor(protected readonly repository: Repository<Entity>) {}

  async findAll(query?: FindManyOptions<Entity>) {
    return this.repository.find(query);
  }

  async findOne(id: string) {
    return this.repository.findOne({
      where: { id } as FindOptionsWhere<Entity>,
    });
  }

  async create(dto: PartialEntity) {
    return this.repository.save(dto);
  }

  async update(id: string, dto: QueryEntity) {
    const entity = await this.findOne(id);
    if (!entity) {
      throw new NotFoundException(`Entity with id ${id} not found`);
    }
    await this.repository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const entity = await this.findOne(id);
    if (!entity) {
      throw new NotFoundException(`Entity with id ${id} not found`);
    }
    await this.repository.delete(id);
  }
}
