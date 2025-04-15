import React, { useState } from "react";
import AddTaskForm from "../features/task/AddTask";
import ListTasks from "../features/task/TasksList";
import NavBar from "../components/NavBar";
import { useAppDispatch, useAppSelector } from "../hooks";
import TaskList from "../features/task/TasksList";
import Input from "../components/Input";
import { Search } from "lucide-react";
import Modal from "../components/Modal";
import { closeTaskForm, openTaskForm } from "../features/task/TaskSlice";
import Button from "../components/Button";

const TaskPage = () => {
  const [search, setSearch] = useState<string>("");

  const { tasks, isOpen } = useAppSelector((state) => state.tasks);

  const dispatch = useAppDispatch();

  return (
    <div className=" min-h-screen flex flex-col ">
      <NavBar />
      <div className="container flex-1  border-4 mx-auto flex pt-4 justify-center">
        <div className="px-4 w-lg flex flex-col ">
          <div className="flex justify-between  gap-4  my-2">
            <Button
              className=" h-fit p-2 text-lg font-bold "
              onClick={() => dispatch(openTaskForm())}
            >
              add task
            </Button>
            <Input
              icon={<Search />}
              placeholder="search"
              id="search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className=" bg-bg1 ">
            <TaskList
              tasks={tasks.filter(
                (task) => task.title.startsWith(search) || search === ""
              )}
            />
          </div>
        </div>
      </div>

      <Modal
        header="add task"
        isOpen={isOpen}
        onClose={() => {
          dispatch(closeTaskForm());
        }}
      >
        <AddTaskForm />
      </Modal>
    </div>
  );
};

export default TaskPage;
