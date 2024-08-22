import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';
import { HydratedDocument, Schema as ms } from 'mongoose';
import { Image } from 'src/types/image';

class Name {
  en: string;
  es: string;
}

class Content {
  en: string[];
  es: string[];
}

export class UpdateItemDto {
  @IsNumber()
  @IsOptional()
  likes: number;
}

export class ItemMatch {
  @IsOptional()
  name: object;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => Number(value))
  base_price: number;
}

@Schema()
export class Item {
  @Prop({ type: Name, required: true })
  name: object;

  @Prop({ type: Content })
  content: object;

  @Prop({ required: true })
  base_price: number;

  @Prop()
  likes: number;

  @Prop()
  images: Array<Image>;

  @Prop({ required: true })
  priority: number;

  @Prop()
  category_id: ms.Types.ObjectId;
}

export type ItemDocument = HydratedDocument<Item>;

export const ItemSchema = SchemaFactory.createForClass(Item);
