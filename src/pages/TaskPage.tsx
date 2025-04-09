import React from "react";
import { useAppSelector } from "../hooks";
import AddTaskForm from "../features/task/AddTask";
import ListTasks from "../features/task/ListTasks";
import { useTheme } from "../context/ThemeProvider";
import NavBar from "../components/NavBar";

const TaskPage = () => {
  const { tasks } = useAppSelector((state) => state.tasks);
  const { type, toggleTheme } = useTheme();
  return (
    <div className=" min-h-screen flex flex-col">
      <NavBar />
      <div className="container flex-1  border-4 mx-auto flex items-center justify-center">
        <AddTaskForm />
        <span>{type}</span>
        <button onClick={toggleTheme}>toggle</button>
      </div>
    </div>
  );
};

export default TaskPage;
