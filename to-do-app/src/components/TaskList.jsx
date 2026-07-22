import React from "react";
import Task from "./Task";
import todos from "../data/todos";

const TaskList = () => {
  return (
    <>
      <Task title={todos[0].title} />
      <Task title={todos[1].title} />
      <Task title={todos[2].title} />
      <Task title={todos[3].title} />
      <Task title={todos[4].title} />
      <Task title={todos[5].title} />
      <Task title={todos[6].title} />
      <Task title={todos[7].title} />
    </>
  );
};

export default TaskList;
