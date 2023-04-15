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
    <div>
      <div className=" h-[10rem]">
        <Navbar />
      </div>
      <div className=" flex justify-start items-start sm:px-[5rem] px-2">
        <div className=" md:w-[50%] w-[95%] m-auto sm:m-0">
          <div
            className="flex justify-center items-center sm:gap-[3rem] gap-6
           border-b-[2px] py-[2rem] border-white"
          >
            <button onClick={toggleFirstDiv}>
              <h1 className=" sm:px-[2rem] px-3 py-[1rem] bg-blured sm:rounded-[1.5rem] rounded-[1rem] box-shadow">
                Bar Menu
              </h1>
            </button>
            <button onClick={toggleSecondDiv}>
              <h1 className=" sm:px-[2rem] px-3 py-[1rem] bg-blured sm:rounded-[1.5rem] rounded-[1rem] box-shadow">
                Restaurant Menu
              </h1>
            </button>
          </div>
          {showFirstDiv && <Bar />}
          {showSecondDiv && <Restaurant />}
        </div>
      </div>
    </div>
  );
}
