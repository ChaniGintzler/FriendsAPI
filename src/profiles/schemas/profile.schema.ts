import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from "mongoose";
import { User } from 'src/users/schemas/user.schema';


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
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
  createdBy: User
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);