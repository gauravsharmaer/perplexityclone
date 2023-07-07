import React, { useState } from "react";
import { getaistatus } from "@/store/Slice";
import { useSelector } from "react-redux";

import Image from "next/image";
const AiSummary = (props) => {
  const { isVisible, onClose, description } = props;
 const status =useSelector(getaistatus)
  if (!isVisible) {
    return null;
  }

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50"
        id="wrapper"
        onClick={handleClose}
      >
        <div className="w-[25rem] flex flex-col bg-white rounded-lg">
          <button
            className="text-white mt-6 mr-4  px-2 place-self-end bg-gray-300   rounded-full"
            onClick={() => onClose()}
          >
            x
          </button>
          <div className="bg-white font-bold text-[24px] shadow-xl py-1 text-center ">
            Ai-Summary
          </div>

{/* 
{
    status ==="loading"? <Image src={}/>

 
} */}
          <div className="bg-white p-2 rounded mb-2 py-4 px-6 text-[12px] sm:text-[14px]">
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default AiSummary;
