import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundError } from 'rxjs';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
 

  @Post('/signup')
  signUp(@Body() body:any)
  {
    const email = body.email
    const password = body.password
    if(!email){
      throw new BadRequestException("email not found")
    }


  
    if(!password){
      throw new BadRequestException("password not found")
    }
    
    return this.usersService.signUp(email, password)
  }


  @Post('/signin')
  signin(@Body() body:any)
  {
    const email = body.email
    const password = body.password
    if(!email){
      throw new BadRequestException("email not found")
    }


  
    if(!password){
      throw new BadRequestException("password not found")
    }
    
    return this.usersService.signin(email, password)
  }








  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }




  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
