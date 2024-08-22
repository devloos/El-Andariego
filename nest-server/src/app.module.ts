import { Module } from '@nestjs/common';
import { PostsController } from 'src/controllers/posts.controller';
import { PostsService } from 'src/services/posts.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './schemas/post.schema';
import { ItemSchema } from './schemas/item.schema';
import { ItemsController } from './controllers/items.controller';
import { ItemsService } from './services/items.service';
import { CategorySchema } from './schemas/category.schema';
import { CategoriesController } from './controllers/categories.controller';
import { CategoriesService } from './services/categories.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([
      { name: 'post', schema: PostSchema },
      { name: 'item', schema: ItemSchema },
      { name: 'category', schema: CategorySchema },
    ]),
  ],
  controllers: [PostsController, ItemsController, CategoriesController],
  providers: [PostsService, ItemsService, CategoriesService],
})
export class AppModule {}
