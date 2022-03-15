import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './auth/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { secret } from './auth/constants';
// //'mongodb://localhost:27017',
@Module({
  imports: [
    //woIQ33LgRFiiX62B pass friendsAPIUser- user
    MongooseModule.forRoot(
      'mongodb+srv://friendsAPIUser:woIQ33LgRFiiX62B@cluster0.xjouu.mongodb.net/friendsdB?retryWrites=true&w=majority'),//mongodb://localhost/friends
    PassportModule,
    ProfilesModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
