import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.usersService.findOne(email);
  }

  // @Post('/signup')
  // async Signup(@Res() response, @Body() user: User) {
  //   console.log(user);
  //   const newUSer = await this.usersService.signup(user);
  //   return response.status(HttpStatus.CREATED).json({
  //     newUSer,
  //   });
  // }

  // @Post('/signin')
  // async SignIn(@Res() response, @Body() user: User) {
  //   const token = await this.usersService.signin(user, this.jwtService);
  //   return response.status(HttpStatus.OK).json(token);
  // }
}
