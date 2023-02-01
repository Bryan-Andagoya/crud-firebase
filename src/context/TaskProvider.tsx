import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { Alert } from "react-native";

import { TaskContext, TaskStore } from "./TaskContext";
import { db } from "../config";
import { TaskModel } from "../models";

interface Props {
  children: JSX.Element;
}

export const TaskProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState<TaskModel[] | null>(null);

  const getTasks = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "tasks"));
      const data: TaskModel[] = [];

      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...(doc.data() as any) });
      });

      setTasks(data);
    } catch (error) {
      Alert.alert("Error", (error as any).message);
    }
  };

  const store: TaskStore = {
    tasks,
    getTasks,
  };

  return <TaskContext.Provider value={store}>{children}</TaskContext.Provider>;
};
