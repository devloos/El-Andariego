import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, now } from 'mongoose';
import { IsString } from 'class-validator';

export class ApplicationDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  description: string;

  @IsString()
  interestedIn: string;
}

@Schema()
export class Application {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  interestedIn: string;

  @Prop({ default: now() })
  createdAt: Date;
}

export type ApplicationDocument = HydratedDocument<Application>;

export const ApplicationSchema = SchemaFactory.createForClass(Application);
