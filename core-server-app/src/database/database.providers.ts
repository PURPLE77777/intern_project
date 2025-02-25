import { ConfigService } from 'modules/config/config.service';
import { DataSource } from 'typeorm';

export const DATABASE_TOKEN = 'DATA_SOURCE';

export const databaseProviders = [
  {
    provide: DATABASE_TOKEN,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        // migrationsRun: true,
        host: configService.get('POSTGRES_HOST'),
        port: Number(configService.get('POSTGRES_PORT')) || 5432,
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        migrations: [__dirname + '/migrations/**/*.{js,ts}'],
        synchronize: configService.get('STAGE') !== 'production',
      });

      try {
        await dataSource.initialize();
      } catch (e) {
        console.log('error', e);
      }

      return dataSource;
    },
  },
];
