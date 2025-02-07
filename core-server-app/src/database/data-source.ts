import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { ConfigService } from '../modules/config/config.service';

config();

const configService = new ConfigService('.env');

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: configService.get('POSTGRES_HOST'),
	port: Number(configService.get('POSTGRES_PORT')),
	username: configService.get('POSTGRES_USER'),
	password: configService.get('POSTGRES_PASSWORD'),
	database: configService.get('POSTGRES_DB'),
	migrationsRun: true,
	synchronize: configService.get('STAGE') !== 'production',
	entities: [__dirname + '/../../**/*.entity.{js,ts}'],
	migrations: [__dirname + '/migrations/**/*.{js,ts}'],
});
