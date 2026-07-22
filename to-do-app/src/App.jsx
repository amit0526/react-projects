import React, { useState } from "react";
import Button from "./components/Button";
import TaskList from "./components/TaskList";
import todosData from "./data/todos";

const App = () => {
  const [todos, setTodos] = useState(todosData);
  const [newTask, setNewTask] = useState("");

  return (
    <div className="flex h-screen bg-gray-200 justify-center items-center">
      <div className="w-full max-w-2xl bg-gray-300 shadow-lg rounded-lg p-8">
        <h1 className="font-bold text-4xl flex justify-center mb-8">
          TODO-LIST
        </h1>

        <Button newTask={newTask} setNewTask={setNewTask} />

        <TaskList todos={todos} />
      </div>
    </div>
  );
};

export default App;
