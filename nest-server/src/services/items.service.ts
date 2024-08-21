import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemDocument, UpdateItemDto } from 'src/schemas/item.schema';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('item') private itemModel: Model<ItemDocument>) {}

  findOneById(id: string): Promise<ItemDocument> {
    return this.itemModel.findOne({ _id: id }).exec();
  }

  findAll(): Promise<ItemDocument[]> {
    return this.itemModel.find().exec();
  }

  update(id: string, updateItemDto: UpdateItemDto): Promise<ItemDocument> {
    return this.itemModel.findByIdAndUpdate(id, updateItemDto, { new: true });
  }
}
