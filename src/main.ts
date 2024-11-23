import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';
import { envs } from './config';


async function bootstrap() {

  const app = await NestFactory.createMicroservice<MicroserviceOptions>( AppModule, {
    transport: Transport.NATS,
    options: {
      servers: envs.natsServers
    }
  } );

  const logger = new Logger( 'History Microservice' );

  app.useGlobalPipes(
    new ValidationPipe( {
      whitelist: true,
      forbidNonWhitelisted: true,
    } )
  );

  await app.listen();

  logger.log( `History Microservice running on on port ${ envs.port }` );
}
bootstrap();
