import React from "react";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { useAppDispatch } from "../../hooks";
import {type TaskType } from "./TaskType";
import { addTask } from "./TaskSlice";
import Button from "../../components/Button";
const AddTaskForm = () => {
  const dispatch = useAppDispatch();

  function handleSave(val: unknown) {
    const data = val as TaskType;
    dispatch(addTask(data));
  }

  return (
    <Form onSave={handleSave} className="flex gap-5 ">
      <Input id="id" label="id" />
      <Input id="content" label="content" />
      <Input id="title" label="title" />
      <Button type="submit">click me</Button>
      
    </Form>
  );
};

export default AddTaskForm;
