import { Body, Controller, Post } from '@nestjs/common';
import { CreateStatusDTO } from './dtos/createStatusDTO';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
  constructor(private statusService: StatusService) {}

  @Post()
  async create(@Body() status: CreateStatusDTO) {
    return await this.statusService.createStatus(status);
  }
}
