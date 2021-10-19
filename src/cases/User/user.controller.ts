import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { User } from 'src/entities/user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async index(@Req() request: Request): Promise<User[]> {
    return await this.userService.findAll();
  }
}
