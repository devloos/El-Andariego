import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, PipelineStage } from 'mongoose';
import { ItemDocument, UpdateItemDto } from 'src/schemas/item.schema';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('item') private itemModel: Model<ItemDocument>) {}

  findOneById(id: string): Promise<ItemDocument> {
    return this.itemModel.findOne({ _id: id }).exec();
  }

  findAll(match = {}, include = {}): Promise<ItemDocument[]> {
    const pipeline: PipelineStage[] = [
      {
        $match: match,
      },
      {
        $sort: {
          priority: 1,
        },
      },
    ];

    if ('category' in include) {
      pipeline.push({
        $lookup: {
          from: 'categories',
          localField: 'category_id',
          foreignField: '_id',
          as: 'category',
        },
      });

      pipeline.push({
        $unwind: '$category',
      });
    }

    return this.itemModel.aggregate(pipeline).exec();
  }

  update(id: string, updateItemDto: UpdateItemDto): Promise<ItemDocument> {
    return this.itemModel.findByIdAndUpdate(id, updateItemDto, { new: true });
  }
}
