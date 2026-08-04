import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';

import { AppModule } from './app.module';
import { getCorsOptions } from './cors.config';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors(getCorsOptions());
  app.useGlobalPipes(
    new ValidationPipe({
      // Runs class-transformer (so @Transform decorators actually fire)
      // and turns plain input objects into real DTO class instances.
      transform: true,
      // Strips any property without a class-validator decorator...
      whitelist: true,
      // ...and rejects the request outright if one was sent, rather than
      // silently dropping it.
      forbidNonWhitelisted: true,
    }),
  );
  const port = Number(process.env.PORT ?? 4000);
  await app.listen(port);
}

void bootstrap();
