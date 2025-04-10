import React, { useState } from "react";
import AddTaskForm from "../features/task/AddTask";
import ListTasks from "../features/task/TasksList";
import NavBar from "../components/NavBar";
import { useAppSelector } from "../hooks";
import TaskList from "../features/task/TasksList";
import Input from "../components/Input";
import { Search } from "lucide-react";

const TaskPage = () => {
  const [search, setSearch] = useState<string>("");
  const { tasks } = useAppSelector((state) => state.tasks);
  return (
    <div className=" min-h-screen flex flex-col ">
      <NavBar />
      <div className="container flex-1  border-4 mx-auto flex pt-4 justify-center">
        <div className="px-4">
          <AddTaskForm />
          <Input icon={<Search />} placeholder="search" id="search" onChange={(e) => setSearch(e.target.value)} />
          <TaskList
            tasks={tasks.filter(
              (task) => task.title.startsWith(search) || search === ""
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
