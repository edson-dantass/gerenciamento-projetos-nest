import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Status } from 'src/entities/status.entity';
import { Tasks } from 'src/entities/tasks.entity';
import { TasksStatusStatus } from 'src/entities/tasksStatusStatus.entity';
import { User } from 'src/entities/user.entity';
import { TasksStatusStatusModule } from '../TasksStatusStatus/tasksStatusStatus.module';
import { TasksStatusStatusService } from '../TasksStatusStatus/tasksStatusStatus.service';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  providers: [TasksService],
  controllers: [TasksController],
  imports: [
    TypeOrmModule.forFeature([Tasks, User, Status, TasksStatusStatus]),
    forwardRef(() => TasksStatusStatusModule),
  ],
  exports: [TasksService],
})
export class TasksModule {}
