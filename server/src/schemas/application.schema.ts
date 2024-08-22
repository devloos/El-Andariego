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
  event_type: string;
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
  event_type: string;

  @Prop()
  interested_in: string;

  @Prop({ default: now() })
  created_at: Date;
}

export type ApplicationDocument = HydratedDocument<Application>;

export const ApplicationSchema = SchemaFactory.createForClass(Application);
