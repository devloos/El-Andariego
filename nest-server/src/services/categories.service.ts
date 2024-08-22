import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, PipelineStage } from 'mongoose';
import { CategoryDocument } from 'src/schemas/category.schema';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel('category') private categoryModel: Model<CategoryDocument>,
  ) {}

  findOneById(id: string): Promise<CategoryDocument> {
    return this.categoryModel.findOne({ _id: id }).exec();
  }

  findAll(match = {}, include = {}): Promise<CategoryDocument[]> {
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

    if ('items' in include) {
      pipeline.push({
        $lookup: {
          from: 'items',
          localField: 'items',
          foreignField: '_id',
          pipeline: [
            {
              $sort: {
                priority: 1,
              },
            },
          ],
          as: 'items',
        },
      });
    }

    return this.categoryModel.aggregate(pipeline).exec();
  }
}
