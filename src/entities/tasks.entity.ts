import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Status } from './status.entity';
import { TasksStatusStatus } from './tasksStatusStatus.entity';
import { User } from './user.entity';
@Entity('tasks')
export class Tasks {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 60 })
  title: string;

  @Column({ length: 250 })
  description: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;

  @ManyToMany(() => Status, (status) => status.tasks)
  @JoinTable()
  status: Status[];

  @OneToMany(
    () => TasksStatusStatus,
    (taskStatusStatus) => taskStatusStatus.tasksId,
  )
  tasksStatusStatus: TasksStatusStatus[];
}
