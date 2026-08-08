import React from 'react'

const App = () => {
  return (
    <>
      <div className="flex bg-linear-[25deg,red_5%,yellow_60%,lime_90%,teal] min-h-screen items-center justify-center">
        <div className="flex w-full max-w-sm min-h-70 p-3  justify-center items-center bg-gray-300 flex-col gap-5 rounded-3xl">
          <div className="bg-amber-200 w-full rounded-xl -mt-10">
            <h1 className="bg-rose-100 m-2 mtpx-2 text-center text-2xl font-bold rounded-2xl ">
              Name-Input
            </h1>
          </div>
          <div>
            <input className="bg-lime-200 rounded mt-7  p-2"></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
