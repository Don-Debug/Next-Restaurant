"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

import Bar from "./components/Bar";
import Restaurant from "./components/Restaurant";
import CheckBill from "./components/CheckBill";

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
      <div className=" flex justify-start items-start px-[5rem]">
        <div className=" w-[50%]">
          <div className="flex justify-center items-center gap-[3rem] border-b-[2px] py-[2rem] border-white">
            <button onClick={toggleFirstDiv}>
              <h1 className=" px-[2rem] py-[1rem] bg-blured rounded-[1.5rem] box-shadow">
                Bar Menu
              </h1>
            </button>
            <button onClick={toggleSecondDiv}>
              <h1 className=" px-[2rem] py-[1rem] bg-blured rounded-[1.5rem] box-shadow">
                Restaurant Menu
              </h1>
            </button>
          </div>
          {showFirstDiv && <Bar />}
          {showSecondDiv && <Restaurant />}
        </div>
        <div className="w-[40%] fixed right-[3rem]">
          <CheckBill />
        </div>
      </div>
    </div>
  );
}
