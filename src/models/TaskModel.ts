import type { TaskStateModel as TaskStateModelType } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // quando o timer chega ao finalAdd commentMore actions
  interruptDate: number | null; // quando a task for interrompida
  type: keyof TaskStateModelType['config'];
};
