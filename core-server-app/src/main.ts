import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from 'modules/app.module';
import { ConfigService } from 'modules/config/config.service';
import { setupSwagger } from 'swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors();
  app.setGlobalPrefix(configService.get('APP_URL'));
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })
  );

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  setupSwagger(app);

  await app.listen(Number(configService.get('PORT')) || 3000);
}

bootstrap();
