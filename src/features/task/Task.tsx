import React from "react";
import { type TaskType } from "./TaskType";
import Card from "../../components/Card";
import ActionButton from "../../components/ActionButton/ActionButton";
import {  X } from "lucide-react";
import {removeTask, toggleFinishStatus} from './TaskSlice'
import { useAppDispatch } from "../../hooks";

type Props = {
  task: TaskType;
};

const Task = ({ task }: Props) => {

  const dispatch = useAppDispatch()



  return (
    <Card className="group flex items-start gap-4 p-4 border-b-2 border-bg3 bg-transparent hover:bg-bg2 transition-colors duration-200">
  <input
    type="checkbox"
    className="mt-1 size-5 accent-green "
    checked={task.isFinish}
    onChange={() => dispatch(toggleFinishStatus(task.id))}
  />

  <div className={`flex-1 space-y-1 ${
        task.isFinish ? "line-through text-muted text-gray0" : ""
      }`}>
    <h2
      className={`text-lg font-semibold  `}
    >
      
      {task.title}
    </h2>
    <p
      className={`text-sm `}
    >
      {task.content}
    </p>
  </div>

  <ActionButton
    onClick={() => dispatch(removeTask(task.id))}
    className=" transition-opacity duration-200"
  >
    <X className="w-5 h-5 text-destructive" />
  </ActionButton>
</Card>
  );
};

export default Task;
