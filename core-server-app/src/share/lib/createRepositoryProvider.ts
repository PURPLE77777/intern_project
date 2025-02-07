import { Provider } from '@nestjs/common';
import { DATABASE_TOKEN } from 'database/database.providers';
import { DataSource } from 'typeorm';

export const createRepositoryProvider: <T>(
	Entity: { new (): T },
	token: string
) => Provider = (Entity, token) => ({
	provide: token,
	useFactory: (dataSource: DataSource) => dataSource.getRepository(Entity),
	inject: [DATABASE_TOKEN],
});
