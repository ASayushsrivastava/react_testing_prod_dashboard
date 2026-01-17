import { useApp } from "../context/AppContext";

export const useTasks = () => {
  const { tasks, addTask, toggleTaskDone, removeTask } = useApp();
  return { tasks, addTask, toggleTaskDone, removeTask };
};
