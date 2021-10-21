import { Status } from 'src/entities/status.entity';
import { User } from 'src/entities/user.entity';

export interface CreateTaskDTO {
  title: string;
  description: string;
  user: User;
  statusId: Status;
}
