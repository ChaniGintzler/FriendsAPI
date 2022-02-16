import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { profile } from 'console';
import { Model } from 'mongoose';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile, ProfileDocument } from './schemas/profile.schema';

@Injectable()
export class ProfilesService {
constructor(@InjectModel(Profile.name) private profileModel: Model<ProfileDocument>){}

async  create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const createfProfile = new this.profileModel(createProfileDto);
    return createfProfile.save();
  }

  async findAll() : Promise<Profile[]> {
    return this.profileModel.find().exec();
  }

  async findOne(id: string): Promise<Profile> {
    return this.profileModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateProfileDto: UpdateProfileDto) {
    const data = await this.profileModel.findByIdAndUpdate(id, updateProfileDto, {
      new: true,
      runValidators: true
    })
   // !data && this.throwNotFoundException(this.profileModel.modelName)

    return data
  }

 async  remove(id: string) {
    const deleted = await this.profileModel
    .findByIdAndRemove({ _id: id })
    .exec();
  return deleted;
  }
}
