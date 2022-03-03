import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signup')
  async signup(@Body() user) {
    console.log('sign', user);
    return this.authService.signup(user);
  }
  @Post('login')
  async login(@Body() user) {
    console.log('login', user);
    return this.authService.signin(user);
  }
}

