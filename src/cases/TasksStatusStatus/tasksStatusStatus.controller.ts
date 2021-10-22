import { Body, Controller, Post } from '@nestjs/common';
import { CreateTasksStatusStatusDTO } from './dtos/createTasksStatusStatusDTO';
import { TasksStatusStatusService } from './tasksStatusStatus.service';

@Controller('toggleStatus')
export class TasksStatusStatusController {
  constructor(private tasksStatusStatusService: TasksStatusStatusService) {}

  @Post()
  async create(@Body() stasksStatus: CreateTasksStatusStatusDTO) {
    return await this.tasksStatusStatusService.createTasksStatusStatus(
      stasksStatus,
    );
  }
}
