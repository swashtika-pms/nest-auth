import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) 
  private model: Model<Users>) {
}


  async signUp(email:string, password: string){
    return await this.model.findOne({
      email:email,
      password:password
    })
  }

  async signin(email:string, password: string){
    return await this.model.create({
      email:email,
      password:password
    })
  }

  create(CreateUserDto: CreateUserDto) {  
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number) {
    return await this.model.find();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
