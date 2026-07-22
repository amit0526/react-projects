import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const updateCounter = (value) => {
    setNum((prev) => Math.max(0, prev + value));
  };

  return (
    <div className="min-h-screen bg-amber-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        {/* Heading */}
        <h1 className="text-center bg-red-500 text-white text-xl sm:text-2xl md:text-3xl font-bold rounded-lg py-4 px-4">
          Counter App
        </h1>

        {/* Counter */}
        <div className="flex justify-center my-8">
          <input
            type="text"
            value={num}
            readOnly
            className="w-32 sm:w-44 md:w-56 h-16 sm:h-20 md:h-24 bg-amber-200 rounded-lg text-center text-3xl sm:text-4xl md:text-5xl font-bold outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => updateCounter(1)}
            className="bg-gray-700 hover:bg-gray-800 text-white py-3 rounded-lg text-lg font-semibold transition"
          >
            Increase
          </button>

          <button
            onClick={() => updateCounter(-1)}
            className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg font-semibold transition"
          >
            Decrease
          </button>

          <button
            onClick={() => updateCounter(5)}
            className="bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg text-lg font-semibold transition"
          >
            Increase +5
          </button>

          <button
            onClick={() => updateCounter(-5)}
            className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg text-lg font-semibold transition"
          >
            Decrease -5
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
