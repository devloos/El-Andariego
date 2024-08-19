import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Image } from 'src/types/image';

class Description {
  en: string;
  es: string;
}

@Schema()
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ type: Description })
  description: object;

  @Prop()
  images: Array<Image>;
}

export type PostDocument = HydratedDocument<Post>;

export const PostSchema = SchemaFactory.createForClass(Post);
