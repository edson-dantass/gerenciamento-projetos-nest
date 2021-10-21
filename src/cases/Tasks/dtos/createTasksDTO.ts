import { User } from 'src/entities/user.entity';

export interface CreateTaskDTO {
  title: string;
  description: string;
  user: User;
  statusId: string;
}
