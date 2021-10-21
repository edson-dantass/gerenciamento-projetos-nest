import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksStatusStatus } from 'src/entities/tasksStatusStatus.entity';
import { Repository } from 'typeorm';
import { CreateTasksStatusStatusDTO } from './dtos/createTasksStatusStatusDTO';

@Injectable()
export class TasksStatusStatusService {
  constructor(
    @InjectRepository(TasksStatusStatus)
    private tasksStatusStatusRepository: Repository<TasksStatusStatus>,
  ) {}

  createTasksStatusStatus(tasksStatus: CreateTasksStatusStatusDTO) {
    return this.tasksStatusStatusRepository.save(tasksStatus);
  }
}
