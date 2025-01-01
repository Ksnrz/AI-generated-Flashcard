import React from "react";

const Score = ({ correct, wrong, resetScore, isLoading }) => {
  return (
    <>
      <div className="h-screen w-[20%] absolute top-0 bottom-0 left-0 px-4 py-2 select-none bg-slate-200">
        <div className="flex justify-center items-center bg-opacity-65 px-4 py-2 rounded-3xl">
          <div className="text-black text-2xl mr-3">
            <i class="fa-regular fa-circle-check text-2xl mr-2 text-green-500"></i>
            {correct}
          </div>
          <div className="text-black text-2xl mr-3">
            <i class="fa-regular fa-circle-xmark text-2xl mr-2 text-red-500"></i>
            {wrong}
          </div>
          <button
            className="flex items-center justify-center text-white text-xl bg-red-500 px-1.5 py-1 rounded-xl"
            onClick={resetScore}
            disabled={isLoading}
          >
            <i class="fa-solid fa-rotate text-2xl text-white mr-1.5"></i>
            Reset
          </button>
        </div>
        <div className="flex">
          <button className=" w-full bg-green-400 px-5 py-2 rounded-xl border-2 border-black text-xl">
            สร้าง Flashcard ใหม่ <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Score;
