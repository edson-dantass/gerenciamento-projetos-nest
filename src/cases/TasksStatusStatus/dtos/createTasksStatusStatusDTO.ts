import { Status } from 'src/entities/status.entity';
import { Tasks } from 'src/entities/tasks.entity';

export interface CreateTasksStatusStatusDTO {
  tasks: Tasks;
  status: Status;
}
