import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Status } from 'src/entities/status.entity';
import { Tasks } from 'src/entities/tasks.entity';
import { TasksStatusStatus } from 'src/entities/tasksStatusStatus.entity';
import { TasksStatusStatusController } from './tasksStatusStatus.controller';
import { TasksStatusStatusService } from './tasksStatusStatus.service';

@Module({
  providers: [TasksStatusStatusService],
  controllers: [TasksStatusStatusController],
  imports: [TypeOrmModule.forFeature([TasksStatusStatus, Status, Tasks])],
})
export class TasksStatusStatusModule {}
