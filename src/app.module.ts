import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.modules';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
@Module({
  imports: [ItemsModule, MongooseModule.forRoot(config.MongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}