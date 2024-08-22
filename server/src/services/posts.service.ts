import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDocument } from 'src/schemas/post.schema';

@Injectable()
export class PostsService {
  constructor(@InjectModel('post') private postModel: Model<PostDocument>) {}

  findOneById(id: string): Promise<PostDocument> {
    return this.postModel.findOne({ _id: id }).exec();
  }

  findAll(): Promise<PostDocument[]> {
    return this.postModel.find().exec();
  }
}
