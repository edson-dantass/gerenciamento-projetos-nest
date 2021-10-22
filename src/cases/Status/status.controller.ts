import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateStatusDTO } from './dtos/createStatusDTO';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
  constructor(private statusService: StatusService) {}

  @Get()
  async index() {
    return await this.statusService.findAll();
  }
  @Post()
  async create(@Body() status: CreateStatusDTO) {
    return await this.statusService.createStatus(status);
  }
}
