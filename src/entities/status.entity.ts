import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tasks } from './tasks.entity';
import { TasksStatusStatus } from './tasksStatusStatus.entity';

@Entity('status')
export class Status {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ length: 30 })
  name: string;

  @ManyToMany(() => Tasks, (tasks) => tasks.status)
  tasks: Tasks[];

  @OneToMany(
    () => TasksStatusStatus,
    (tasksStatusStatus) => tasksStatusStatus.statusId,
  )
  tasksStatusStatus: TasksStatusStatus[];
}
