"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

import Bar from "./components/Bar";
import Restaurant from "./components/Restaurant";

export default function Menu() {
  const [showFirstDiv, setShowFirstDiv] = useState(true);
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  const toggleFirstDiv = () => {
    setShowFirstDiv(true);
    setShowSecondDiv(false);
  };

  const toggleSecondDiv = () => {
    setShowFirstDiv(false);
    setShowSecondDiv(true);
  };

  return (
    <>
      <div>
        <div className=" h-[10rem]">
          <Navbar />
        </div>
        <div className=" flex justify-start items-start sm:px-[5rem] px-2">
          <div className="w-[100%] m-auto">
            <div
              className="flex justify-center items-center sm:gap-[3rem] gap-6
           border-b-[2px] py-[2rem] border-[#1f1f1d]"
            >
              <button onClick={toggleFirstDiv}>
                <h1 className=" sm:px-[2rem] px-3 py-3 bg-[#f1f1f7] border-x-[3px] border-[#1f1f1d] sm:rounded-[1.5rem] rounded-[1rem] shadow-md">
                  Bar Menu
                </h1>
              </button>
              <button onClick={toggleSecondDiv}>
                <h1 className=" sm:px-[2rem] px-3 py-3 bg-[#f1f1f7] border-x-[3px] border-[#1f1f1d] sm:rounded-[1.5rem] rounded-[1rem] shadow-md">
                  Restaurant Menu
                </h1>
              </button>
            </div>
            {showFirstDiv && <Bar />}
            {showSecondDiv && <Restaurant />}
          </div>
        </div>
      </div>
    </>
  );
}
