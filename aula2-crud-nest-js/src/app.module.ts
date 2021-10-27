import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://CrudUser:ab4at#2-gPiH!t2@cluster0.zkk4u.mongodb.net/test')],
  controllers: [],
  providers: [],
})
export class AppModule {}
