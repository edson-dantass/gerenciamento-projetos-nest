import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from 'src/entities/status.entity';
import { Tasks } from 'src/entities/tasks.entity';
import { TasksStatusStatus } from 'src/entities/tasksStatusStatus.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { TasksStatusStatusService } from '../TasksStatusStatus/tasksStatusStatus.service';
import { CreateTaskDTO } from './dtos/createTasksDTO';
import { UpdateTaskDTO } from './dtos/updateTaskDTO';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks)
    private tasksRepository: Repository<Tasks>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Status)
    private statusRepository: Repository<Status>,
    @InjectRepository(TasksStatusStatus)
    private tasksStatusStatusRepository: Repository<TasksStatusStatus>, // @Inject(TasksStatusStatusService)
  ) // private tasksStatusService: TasksStatusStatusService,
  {}

  async findAll(): Promise<Tasks[]> {
    const tasks = await this.tasksRepository.find({
      relations: ['user'],
    });

    return tasks;
  }

  async findOne(id: string) {
    const task = this.tasksRepository.findOne({
      where: { id },
    });
    if (!task) {
      return null;
    }

    const statusTasksList = await this.tasksStatusStatusRepository.find({
      where: {
        tasks: task,
      },
      order: { createdAt: 'DESC' },
      relations: ['status'],
    });
    if (!statusTasksList) {
      return null;
    }

    return statusTasksList[0];
  }
  async createTask(task: CreateTaskDTO): Promise<Tasks> {
    const taskEntity = new Tasks();
    const user = await this.userRepository.findOne({
      where: {
        id: task.user,
      },
    });
    const status = await this.statusRepository.findOne({
      where: {
        id: task.status,
      },
    });
    taskEntity.title = task.title;
    taskEntity.description = task.description;
    taskEntity.user = user;
    const taskResult = await this.tasksRepository.save(taskEntity);
    if (taskResult) {
      // await this.tasksStatusService.createTasksStatusStatus({
      //   status: status,
      //   tasks: taskResult,
      // });
      return taskResult;
    }
  }

  async update(task: UpdateTaskDTO): Promise<Tasks> {
    const taskEntity = await this.tasksRepository.findOne({
      where: { id: task.taskId },
    });

    const userEntity = await this.userRepository.findOne({
      where: { id: task.userId },
    });

    if (!taskEntity && !userEntity) {
      return null;
    }

    taskEntity.title = task.title;
    taskEntity.description = task.description;
    taskEntity.user = userEntity;

    return this.tasksRepository.save(taskEntity);
  }

  async delete(id: string) {
    const taskEntity = await this.tasksRepository.findOne({ where: { id } });
    if (!taskEntity) {
      return null;
    }
    return await this.tasksRepository.remove(taskEntity);
  }
}
