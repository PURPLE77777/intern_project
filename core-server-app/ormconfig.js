import * as dotenv from 'dotenv'

dotenv.config()

const {
	DB_TYPE,
	POSTGRES_PORT,
	POSTGRES_PASSWORD,
	POSTGRES_USER,
	POSTGRES_DB,
	POSTGRES_HOST,
} = process.env
console.log(
	DB_TYPE,
	POSTGRES_PORT,
	POSTGRES_PASSWORD,
	POSTGRES_USER,
	POSTGRES_DB,
	POSTGRES_HOST
)
export default {
	type: DB_TYPE,
	host: POSTGRES_HOST,
	port: POSTGRES_PORT,
	username: POSTGRES_USER,
	password: POSTGRES_PASSWORD,
	database: POSTGRES_DB,
	migrations: [__dirname + './src/database/migrations/*{.ts,.js}'],
	entities: [__dirname + './src/**/*.entity.{ts,js}'],
	cli: {
		migrationsDir: 'src/database/migrations',
	},
}
