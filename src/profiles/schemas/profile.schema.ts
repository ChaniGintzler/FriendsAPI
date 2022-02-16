import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type ProfileDocument = Profile & Document;

@Schema()
export class Profile {
   
   
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop() description: string;
  @Prop() age:number;
  @Prop() height:number;
  @Prop() hobbies:string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);