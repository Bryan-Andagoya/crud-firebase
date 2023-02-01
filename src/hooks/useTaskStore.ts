import { useContext } from "react";

import { TaskContext } from "../context";

export const useTaskStore = () => {
  return useContext(TaskContext);
};
