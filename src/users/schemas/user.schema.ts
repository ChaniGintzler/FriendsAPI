import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type UserDocument = User & Document;

@Schema()
export class User {
 
  @Prop({required:true})
  userName: string;
  
  @Prop({required:true, unique:true, lowercase:true})
  email: string;

  @Prop()
  password: string;
 
  @Prop({default: Date.now() })
  createdDate: Date
}

export const UserSchema = SchemaFactory.createForClass(User);