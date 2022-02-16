import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';
import { MongooseModule } from '@nestjs/mongoose';
// //'mongodb://localhost:27017',
@Module({
  imports: [ProfilesModule,
    MongooseModule.forRoot(
       
       'mongodb://localhost/friends'//,{
    //  dbName: 'friends',
  //  }
    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
