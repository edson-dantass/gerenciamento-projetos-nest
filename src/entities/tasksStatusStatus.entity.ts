import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Status } from './status.entity';
import { Tasks } from './tasks.entity';

@Entity('tasks_status_status')
export class TasksStatusStatus {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => Tasks)
  tasks: Tasks;

  @ManyToOne(() => Status)
  status: Status;
}
