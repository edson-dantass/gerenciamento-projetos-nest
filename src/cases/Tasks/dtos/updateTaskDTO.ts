import { Tasks } from 'src/entities/tasks.entity';
import { User } from 'src/entities/user.entity';

export interface UpdateTaskDTO {
  title: string;
  description: string;
  task: Tasks;
  user: User;
}
