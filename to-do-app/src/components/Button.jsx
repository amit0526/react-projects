import React from "react";

const Button = ({ newTask, setNewTask ,handleAddTask}) => {
  return (
    <div className="flex justify-between mb-6 px-10 py-4">
      <button onClick={handleAddTask} className="bg-blue-500 rounded-lg px-2 py-2 text-white font-semibold hover:bg-blue-700 shadow-lg cursor-pointer">
        Add Task
      </button>

      <select className="bg-gray-400 rounded-lg shadow-lg px-3 py-2">
        <option>All</option>
        <option>Completed</option>
        <option>Incomplete</option>
      </select>
    </div>
  );
};

export default Button;
