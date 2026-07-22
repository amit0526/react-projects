import React from "react";

const Task = (props) => {
  return (
    <div className="flex bg-amber-50 rounded items-center justify-between p-3 px-4 m-2 shadow">
      <div className="flex items-center gap-3 flex-1">
        <i className="ri-checkbox-blank-line text-2xl cursor-pointer"></i>

        <span className="text-lg flex-1">{props.title}</span>
      </div>

      <div className="flex gap-5 items-center">
        <i className="ri-delete-bin-fill text-lg text-red-500 cursor-pointer bg-gray-200 px-1 rounded"></i>

        <i className="ri-pencil-fill text-lg text-blue-500 cursor-pointer bg-gray-200 px-1 rounded"></i>
      </div>
    </div>
  );
};

export default Task;
