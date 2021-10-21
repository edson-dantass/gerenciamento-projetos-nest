import { Status } from 'src/entities/status.entity';
import { Tasks } from 'src/entities/tasks.entity';

export interface CreateTasksStatusStatusDTO {
  tasksId: Tasks;
  statusId: Status;
}
