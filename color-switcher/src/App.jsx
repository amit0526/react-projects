import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      {/* Color Buttons */}
      <div className="fixed bottom-12 inset-x-0 flex justify-center px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-4 py-3 rounded-3xl shadow-lg">
          <button
            onClick={() => setColor("red")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("pink")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("blue")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("black")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

          <button
            onClick={() => setColor("orange")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

          <button
            onClick={() => setColor("gray")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("purple")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor("SlateBlue")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "SlateBlue" }}
          >
            SlateBlue
          </button>

          <button
            onClick={() => setColor("cyan")}
            className="px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "cyan" }}
          >
            Cyan
          </button>

          <button
            onClick={() => setColor("brown")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>

          <button
            onClick={() => setColor("teal")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "teal" }}
          >
            Teal
          </button>

          <button
            onClick={() => setColor("magenta")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "magenta" }}
          >
            Magenta
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
