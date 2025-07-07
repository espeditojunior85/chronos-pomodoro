//import { TaskModel } from './TaskModel';
import type { TaskModel as TaskModelType } from './TaskModel';

export type TaskStateModel = {
  tasks: TaskModelType[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModelType | null;
  currentCycle: number; // 1 a 8
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
