import { Module } from '@nestjs/common';
import { PostsController } from 'src/controllers/posts.controller';
import { PostsService } from 'src/services/posts.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './schemas/post.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://admin:Wastedyouth1@tp-cluster.xugrihj.mongodb.net/el-andariego-dev',
    ),
    MongooseModule.forFeature([{ name: 'post', schema: PostSchema }]),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class AppModule {}
