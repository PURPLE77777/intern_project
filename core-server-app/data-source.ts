import * as dotenv from 'dotenv'
import { DataSource } from 'typeorm'

dotenv.config()

const {
	DB_TYPE,
	POSTGRES_PORT,
	POSTGRES_PASSWORD,
	POSTGRES_USERNAME,
	POSTGRES_DB,
	POSTGRES_HOST,
} = process.env

console.log(
	DB_TYPE,
	POSTGRES_PORT,
	POSTGRES_PASSWORD,
	POSTGRES_USERNAME,
	POSTGRES_DB,
	POSTGRES_HOST
)

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: POSTGRES_HOST,
	port: Number(POSTGRES_PORT),
	username: POSTGRES_USERNAME,
	password: POSTGRES_PASSWORD,
	database: POSTGRES_DB,
	entities: [__dirname + '/src/**/*.entity.{ts,js}'],
	synchronize: true,
	migrations: [__dirname + '/src/database/migrations/*{.ts,.js}'],
	// cli: {
	// 	migrationsDir: 'src/database/migrations',
	// },
})

AppDataSource.initialize()
	.then(() => {
		console.log('Data Source has been initialized!')
		// const userRepository = AppDataSource.getRepository(User)
		// userRepository.create(new User())
	})
	.catch(err => {
		console.error('Error during Data Source initialization', err)
	})
	.finally(() => {
		console.log('finished')
	})
