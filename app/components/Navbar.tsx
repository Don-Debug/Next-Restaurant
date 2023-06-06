"use client";
import { useState } from "react";
import Link from "next/link";
import { CgMenuRight, CgClose } from "react-icons/cg";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className=" flex justify-between items-center md:px-14 px-5 md:py-5 py-2
      fixed z-40 w-[100%] top-0 left-0 bg-[#fff] border-b border-[#1f1f1d]"
    >
      <div className=" flex justify-center items-center gap-2 ">
        <h2 className=" sm:text-[1.8rem] text-[1.3rem] font-bold text-[#1f1f1d]">
          Teo-Narte
        </h2>
      </div>
      <div className="flex z-30">
        {toggle ? (
          <CgClose
            className=" text-[40px] font-bold cursor-pointer text-[#1f1f1d]"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <CgMenuRight
            className=" text-[40px] font-bold cursor-pointer text-[#1f1f1d]"
            onClick={() => setToggle(!toggle)}
          />
        )}

        <div
          className={`${
            !toggle ? " hide" : " show"
          } py-6 px-6 absolute md:top-[5.2rem] top-[3.5rem] right-0 md:w-[40%] w-[60%] z-10
          bg-[#fff] flex items-start justify-start h-screen border-t border-zinc-600`}
        >
          <div className=" list-none flex text-center flex-col gap-2 w-full px-2 py-1">
            <Link
              href={`/`}
              className="text-[1.2rem] text-[#1f1f1d] hover:bg-[#cdcdcd] w-full py-2"
              onClick={() => {
                setToggle(!toggle);
                window.scrollTo(0, 0);
              }}
            >
              Home
            </Link>

            <a
              href={`#about`}
              className="text-[1.2rem] text-[#1f1f1d] hover:bg-[#cdcdcd] w-full py-2"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              About
            </a>

            <a
              href={`/menu`}
              className="text-[1.2rem] text-[#1f1f1d] hover:bg-[#cdcdcd] w-full py-2"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Menu
            </a>
            <a
              href={`#gallery`}
              className="text-[1.2rem] text-[#1f1f1d] hover:bg-[#cdcdcd] w-full py-2"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Gallery
            </a>
            <a
              href={`#location`}
              className="text-[1.2rem] text-[#1f1f1d] hover:bg-[#cdcdcd] w-full py-2"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Location
            </a>
            <a
              href={`#testimonials`}
              className="text-[1.2rem] text-[#1f1f1d] hover:bg-[#cdcdcd] w-full py-2"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Testimonials
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
