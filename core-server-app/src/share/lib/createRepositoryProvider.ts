import { Provider, Type } from '@nestjs/common';
import { DATABASE_TOKEN } from 'database/database.providers';
import { BaseEntity } from 'share/base';
import { DataSource } from 'typeorm';

export const createRepositoryProvider: <T extends BaseEntity>(
  Entity: Type<T>,
  token: string
) => Provider = (Entity, token) => ({
  provide: token,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Entity),
  inject: [DATABASE_TOKEN],
});
