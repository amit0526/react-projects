import React, { useState } from "react";

const App = () => {

  const [name, setname] = useState("");

  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center bg-gray-100">
        <div className="bg-gray-300 p-6 rounded-3xl w-full max-w-sm">
            <h1 className="bg-linear-to-r from-sky-300 to-yellow-300 p-3 text-center text-2xl font-bold rounded-2xl">
              Name Input
            </h1>

          <div>
            <input className="bg-lime-200 rounded mt-7 p-2 outline-none"
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter your input.." />
            
            <h2 className="text-4xl font-bold mt-5 text-center">Hello {name}</h2>
          </div>

        </div>
      </div>
    </>
  );
};

export default App;
