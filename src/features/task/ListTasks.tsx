import React from "react";
import { TaskType } from "./TaskType";
import List from "../../components/List";
import { useAppDispatch } from "../../hooks";
import { removeTask } from "../task/TaskSlice";
import Task from "./Task";
type Props = {
  tasks: TaskType[];
};

const ListTasks = ({ tasks }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <List
      items={tasks}
      render={(task, index) => <Task task={task} key={index} />}
    />
  );
};

export default ListTasks;
