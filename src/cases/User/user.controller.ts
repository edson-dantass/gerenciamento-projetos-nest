import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { User } from 'src/entities/user.entity';
import { CreateUserDTO } from './dtos/CreateUserDTO';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async index(@Req() req: Request): Promise<User[]> {
    return await this.userService.findAll();
  }
  @Post()
  async create(@Body() userDTO: CreateUserDTO) {
    return await this.userService.create(userDTO);
  }
}
