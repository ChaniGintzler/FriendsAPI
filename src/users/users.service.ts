import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(user: CreateUserDto): Promise<User> {
    const userExists = await this.userModel.exists({ email: user.email });
    if (userExists) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }
    const createfProfile = new this.userModel(user);
    return createfProfile.save();
  }

  async findOne(email: string): Promise<User> {
    return this.userModel.findOne({ email:email }).exec();
  }
}
