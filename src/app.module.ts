import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusModule } from './cases/Status/status.module';
import { TasksModule } from './cases/Tasks/tasks.module';
import { TasksStatusStatusModule } from './cases/TasksStatusStatus/tasksStatusStatus.module';
import { UserModule } from './cases/User/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    StatusModule,
    TasksModule,
    TasksStatusStatusModule,
  ],
})
export class AppModule {}
