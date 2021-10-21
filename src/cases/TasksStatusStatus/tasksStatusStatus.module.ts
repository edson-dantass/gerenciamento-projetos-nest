import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksStatusStatus } from 'src/entities/tasksStatusStatus.entity';
import { TasksStatusStatusController } from './tasksStatusStatus.controller';
import { TasksStatusStatusService } from './tasksStatusStatus.service';

@Module({
  providers: [TasksStatusStatusService],
  controllers: [TasksStatusStatusController],
  imports: [TypeOrmModule.forFeature([TasksStatusStatus])],
})
export class TasksStatusStatusModule {}
