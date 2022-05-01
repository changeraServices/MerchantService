import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          'amqps://wvxcnisk:0GSLOX-lWFZHKDCwDVP4zDXGx9N7Qjhk@snake.rmq2.cloudamqp.com/wvxcnisk',
        ],
        queue: 'merchants',
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  app.listen();
}
bootstrap();
