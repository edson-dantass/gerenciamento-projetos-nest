import {
  Column,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tasks } from './tasks.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 60 })
  name: string;

  @Column({ length: 120 })
  email: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @OneToMany(() => Tasks, (tasks) => tasks.user, {
    nullable: true,
  })
  tasks: Tasks[];
}
