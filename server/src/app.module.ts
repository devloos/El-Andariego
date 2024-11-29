import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from './schemas/item.schema';
import { ItemsController } from './controllers/items.controller';
import { ItemsService } from './services/items.service';
import { CategorySchema } from './schemas/category.schema';
import { CategoriesController } from './controllers/categories.controller';
import { CategoriesService } from './services/categories.service';
import { SendGridController } from './controllers/send-grid.controller';
import { ApplicationSchema } from './schemas/application.schema';
import { SendGridService } from './services/send-grid.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([
      { name: 'item', schema: ItemSchema },
      { name: 'category', schema: CategorySchema },
      { name: 'application', schema: ApplicationSchema },
    ]),
  ],
  controllers: [ItemsController, CategoriesController, SendGridController],
  providers: [ItemsService, CategoriesService, SendGridService],
})
export class AppModule {}
