import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from 'src/entities/status.entity';
import { Repository } from 'typeorm';
import { CreateStatusDTO } from './dtos/createStatusDTO';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Status)
    private statusRepository: Repository<Status>,
  ) {}

  async findAll(): Promise<Status[]> {
    return await this.statusRepository.find();
  }
  createStatus(status: CreateStatusDTO): Promise<Status> {
    return this.statusRepository.save(status);
  }
}
