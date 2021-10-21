import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Status } from 'src/entities/status.entity';
import { Tasks } from 'src/entities/tasks.entity';
import { TasksStatusStatus } from 'src/entities/tasksStatusStatus.entity';
import { User } from 'src/entities/user.entity';
import { TasksStatusStatusService } from '../TasksStatusStatus/tasksStatusStatus.service';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  providers: [TasksService, TasksStatusStatusService],
  controllers: [TasksController],
  imports: [TypeOrmModule.forFeature([Tasks, User, Status, TasksStatusStatus])],
})
export class TasksModule {}
