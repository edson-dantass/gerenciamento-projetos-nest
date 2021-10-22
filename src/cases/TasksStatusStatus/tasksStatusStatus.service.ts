import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from 'src/entities/status.entity';
import { Tasks } from 'src/entities/tasks.entity';
import { TasksStatusStatus } from 'src/entities/tasksStatusStatus.entity';
import { Repository } from 'typeorm';
import { TasksService } from '../Tasks/tasks.service';
import { CreateTasksStatusStatusDTO } from './dtos/createTasksStatusStatusDTO';
import { SendGridService } from '@anchan828/nest-sendgrid';

@Injectable()
export class TasksStatusStatusService {
  constructor(
    @InjectRepository(TasksStatusStatus)
    private tasksStatusStatusRepository: Repository<TasksStatusStatus>,
    @InjectRepository(Tasks)
    private tasksRepository: Repository<Tasks>,
    @InjectRepository(Status)
    private statusRepository: Repository<Status>,
    @Inject(forwardRef(() => TasksService))
    private tasksService: TasksService,
    @Inject(SendGridService)
    private readonly sendGrid: SendGridService,
  ) {}

  async createTasksStatusStatus(tasksStatus: CreateTasksStatusStatusDTO) {
    const tasksEntity = await this.tasksRepository.findOne({
      where: {
        id: tasksStatus.tasks,
      },
      relations: ['user'],
    });

    const statusEntity = await this.statusRepository.findOne({
      where: {
        id: tasksStatus.status,
      },
    });

    console.log('eaa');
    const task = await this.tasksService.findOne(tasksEntity.user.id);
    if (!tasksEntity && !statusEntity && !task) {
      return null;
    }
    console.log('Oi');

    const tasksStatusStatusEntity = new TasksStatusStatus();
    tasksStatusStatusEntity.tasks = tasksEntity;
    tasksStatusStatusEntity.status = statusEntity;

    const tasksStatusResult = await this.tasksStatusStatusRepository.save(
      tasksStatusStatusEntity,
    );
    console.log(process.env.FROM_EMAIL);

    if (tasksStatusResult) {
      await this.sendGrid.send({
        from: process.env.FROM_EMAIL,
        to: tasksEntity.user.email,
        subject: 'Uma Task mudou de status',
        text: `Olá ${tasksEntity.user.name}, sua task saiu de: ${task.status.name} para: ${statusEntity.name}`,
        html: `<strong>Olá ${tasksEntity.user.name}, sua task saiu de: ${task.status.name} para: ${statusEntity.name}</strong>`,
      });
    }
    return { message: 'Status updated successfully' };
  }
}
