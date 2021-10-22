import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusModule } from './cases/Status/status.module';
import { TasksModule } from './cases/Tasks/tasks.module';
import { TasksStatusStatusModule } from './cases/TasksStatusStatus/tasksStatusStatus.module';
import { UserModule } from './cases/User/user.module';
import { ConfigModule } from '@nestjs/config';
import { SendGridModule } from '@anchan828/nest-sendgrid';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SendGridModule.forRoot({
      apikey: process.env.SENDGRID_API_KEY,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: 5432,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      synchronize: false,
      logging: true,
      entities: ['dist/entities/*.entity{.ts,.js}'],
      migrations: ['src/database/migrations/*.js'],
      cli: {
        entitiesDir: 'src/entities',
        migrationsDir: 'src/database/migrations',
      },
      extra: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }),
    StatusModule,
    TasksModule,
    UserModule,
    TasksStatusStatusModule,
  ],
})
export class AppModule {}
