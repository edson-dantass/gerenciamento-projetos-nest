import { Body, Controller, Post } from '@nestjs/common';
import { CreateTaskDTO } from './dtos/createTasksDTO';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  async create(@Body() task: CreateTaskDTO) {
    return await this.tasksService.createTask(task);
  }
}
