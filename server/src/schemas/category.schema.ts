import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsOptional } from 'class-validator';
import { HydratedDocument, Schema as ms } from 'mongoose';
import { Image } from 'src/types/image';

export class CategoryMatch {
  @IsOptional()
  name: object;
}

@Schema()
export class Category {
  @Prop({ required: true })
  name: string;

  @Prop()
  images: Array<Image>;

  @Prop({ required: true })
  priority: number;

  @Prop()
  items: Array<ms.Types.ObjectId>;

  @Prop()
  category_id: ms.Types.ObjectId;
}

export type CategoryDocument = HydratedDocument<Category>;

export const CategorySchema = SchemaFactory.createForClass(Category);
