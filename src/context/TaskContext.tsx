import { createContext } from "react";

import { TaskModel } from "../models";

export interface TaskStore {
  tasks: TaskModel[] | null;
  getTasks: () => Promise<void>;
}

export const TaskContext = createContext<TaskStore>({} as TaskStore);
