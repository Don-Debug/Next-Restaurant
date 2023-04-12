"use client";
import React, { useState } from "react";
import Link from "next/link";
import barMenu from "../constmenu/Barmenu";
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
      <div className=" flex items-start">
        <div>
          <button onClick={toggleFirstDiv}>
            <h1>bar</h1>
          </button>
          <button onClick={toggleSecondDiv}>
            <h1>Restaurant</h1>
          </button>
          {showFirstDiv && <Bar />}
          {showSecondDiv && <Restaurant />}
        </div>
        <div>
          <h1>Hello word</h1>
        </div>
      </div>
    </div>
  );
}
