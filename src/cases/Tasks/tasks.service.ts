import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from 'src/entities/status.entity';
import { Tasks } from 'src/entities/tasks.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateTaskDTO } from './dtos/createTasksDTO';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks)
    private tasksRepository: Repository<Tasks>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Status)
    private statusRepository: Repository<Status>,
  ) {}

  async createTask(task: CreateTaskDTO): Promise<Tasks> {
    const taskEntity = new Tasks();
    const user = await this.userRepository.findOne({
      where: {
        id: task.user,
      },
    });
    const status = await this.statusRepository.findOne({
      where: {
        id: task.statusId,
      },
    });
    taskEntity.title = task.title;
    taskEntity.description = task.description;
    taskEntity.user = user;
    taskEntity.status = [status];
    return this.tasksRepository.save(taskEntity);
  }
}
