import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from 'src/entities/status.entity';
import { Tasks } from 'src/entities/tasks.entity';
import { TasksStatusStatus } from 'src/entities/tasksStatusStatus.entity';
import { Repository } from 'typeorm';
import { CreateTasksStatusStatusDTO } from './dtos/createTasksStatusStatusDTO';

@Injectable()
export class TasksStatusStatusService {
  constructor(
    @InjectRepository(TasksStatusStatus)
    private tasksStatusStatusRepository: Repository<TasksStatusStatus>,
    @InjectRepository(Tasks)
    private tasksRepository: Repository<Tasks>,
    @InjectRepository(Status)
    private statusRepository: Repository<Status>,
  ) {}

  async createTasksStatusStatus(tasksStatus: CreateTasksStatusStatusDTO) {
    const tasksEntity = await this.tasksRepository.findOne({
      where: {
        id: tasksStatus.tasksId.id,
      },
    });

    const statusEntity = await this.statusRepository.findOne({
      where: {
        id: tasksStatus.statusId.id,
      },
    });

    if (!tasksEntity && !statusEntity) {
      return null;
    }
    const tasksStatusStatusEntity = new TasksStatusStatus();
    tasksStatusStatusEntity.statusId = statusEntity;
    tasksStatusStatusEntity.tasksId = tasksEntity;

    return this.tasksStatusStatusRepository.save(tasksStatusStatusEntity);
  }
}
