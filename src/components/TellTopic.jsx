import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TellTopic = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-4xl mb-10"> AI Generated Flashcard จาก Topic</p>
        <div className="flex w-[40%] bg-lightGray px-4 py-3 rounded-2xl relative">
          <input
            className="bg-lightGray w-full text-mywhite placeholder-gray-400 focus:outline-none focus:ring-0 "
            placeholder="เขียน Topic"
          ></input>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-mywhite h-8 w-8 rounded-full">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default TellTopic;
