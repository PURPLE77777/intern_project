import { BaseEntity } from 'share/base';
import { DeepPartial, FindManyOptions } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export interface IBaseCRUDController<
  Entity extends BaseEntity,
  PartialEntity extends DeepPartial<Entity>,
  QueryEntity extends QueryDeepPartialEntity<Entity>,
> {
  getAll: (query: FindManyOptions<Entity>) => Promise<Entity[]>;

  getOne: (id: string) => Promise<Entity>;

  create: (dto: PartialEntity) => Promise<Entity>;

  update: (id: string, dto: QueryEntity) => Promise<Entity>;

  remove: (id: string) => Promise<void>;
}
