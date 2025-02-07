import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from 'modules/app.module';
import { ConfigService } from 'modules/config/config.service';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const configService = app.get(ConfigService);

	// setupSwagger(app);
	app.enableCors();
	app.setGlobalPrefix(configService.get('APP_URL'));
	app.useGlobalPipes(
		new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })
	);
	useContainer(app.select(AppModule), { fallbackOnErrors: true });
	await app.listen(Number(configService.get('PORT')) || 3000);
}

bootstrap();
