import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRoot('mongodb://localhost/changera-merchant'),
  ],
})
export class DatabaseModule {
  constructor(private configService: ConfigService) {}
}
