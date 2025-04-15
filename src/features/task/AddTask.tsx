import React from "react";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { type TaskType } from "./TaskType";
import { addTask } from "./TaskSlice";
import Button from "../../components/Button";
const AddTaskForm = () => {
  const dispatch = useAppDispatch();

  const tasks = useAppSelector((state)=>state.tasks.tasks)
  const taskLen = tasks.length !== 0 ? tasks[tasks.length-1].id : 0
  function isTaskType(val: any): val is TaskType {
    return (
      val &&
      typeof val === "object" &&
      typeof val.title === "string" &&
      typeof val.content === "string" 
    );
  }

  function handleSave(val: unknown) {
    if (isTaskType(val)) {
      dispatch(addTask({...val,isFinish:false,id:String(Number(taskLen)+1)}));
    }
  }

  return (
    <Form
      onSave={handleSave}
      className="flex flex-col w-[40rem] rounded-md  rounded-t-none  bg-bg1 p-4 gap-4 border-aqua"
    >
      
      <Input id="title" label="title" placeholder="title" required={true} />
      <Input id="content" label="content" placeholder="content" required={true}  />
      <Button type="submit" className="w-full">
        add task
      </Button>
    </Form>
  );
};

export default AddTaskForm;
