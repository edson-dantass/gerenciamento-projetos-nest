import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDTO } from './dtos/createTasksDTO';
import { UpdateTaskDTO } from './dtos/updateTaskDTO';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  async index() {
    return this.tasksService.findAll();
  }
  @Get(':id')
  async show(@Param('id') id: string) {
    return await this.tasksService.findOne(id);
  }
  @Post()
  async create(@Body() task: CreateTaskDTO) {
    return await this.tasksService.createTask(task);
  }
  @Put()
  async update(@Body() task: UpdateTaskDTO) {
    return await this.tasksService.update(task);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.tasksService.delete(id);
  }
}
