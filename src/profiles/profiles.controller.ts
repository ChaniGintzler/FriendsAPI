import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.create(createProfileDto);
  }

  @Get()
  findAll() {
    console.log('aaaaaaaa,,');

    return this.profilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('bbb',id);

    return this.profilesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    console.log('ccc',id);

    return this.profilesService.update(id, updateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log('dddd',id);
    var mongoose = require('mongoose');
    console.log(mongoose.Types.ObjectId.isValid(id));
    return this.profilesService.remove( id );
  }
}
