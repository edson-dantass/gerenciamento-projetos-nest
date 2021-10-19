import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
@Entity('tasks')
export class Tasks {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 60 })
  title: string;

  @Column({ length: 250 })
  description: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;
}
