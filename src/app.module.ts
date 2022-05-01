import { Module } from '@nestjs/common';
import { QueueModule } from './queue/queue.module';
import { MerchantModule } from './merchant/merchant.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { BullModule } from '@nestjs/bull';
import { CacheModule } from './cache/cache.module';
import { EventsModule } from './events/events.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    QueueModule,
    MerchantModule,
    SubscriptionModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    ConfigModule.forRoot({ load: [config] }),
    CacheModule,
    EventsModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
