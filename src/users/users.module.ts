import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
// import { User } from './entities/user.entity';
import { Users, UsersSchema } from './schemas/users.schema';



@Module({
  imports: [MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema}])],

  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {

}
