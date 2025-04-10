import React from "react";
import { TaskType } from "./TaskType";
import List from "../../components/List";

import Task from "./Task";
type Props = {
  tasks: TaskType[];
};

const TaskList = ({ tasks }: Props) => {
  

  return (
    <List
      items={tasks}
      render={(task, index) => <Task task={task} key={index} />}
    />
  );
};

export default TaskList;
