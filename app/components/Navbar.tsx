"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo2.png";
import { CgMenuRight, CgClose } from "react-icons/cg";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className=" flex justify-between items-center md:px-14 px-5 md:py-5 py-2
      fixed z-40 w-[100%] top-0 left-0 bg-blured"
    >
      <div className=" flex justify-center items-center gap-2 ">
        <h2 className=" sm:text-[1.8rem] text-[1.3rem] font-bold text-white">
          Teo-Narte
        </h2>
      </div>
      <div></div>
      <div className="flex z-30">
        {toggle ? (
          <CgClose
            className=" text-[40px] font-bold cursor-pointer text-white"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <CgMenuRight
            className=" text-[40px] font-bold cursor-pointer text-white"
            onClick={() => setToggle(!toggle)}
          />
        )}

        <div
          className={`${
            !toggle ? " hide" : " show"
          } py-6 px-6 absolute md:top-[5.3rem] top-[3.8rem] right-0 md:w-[40%] w-[60%] z-10
          bg-small-menu flex items-start justify-start h-screen`}
        >
          <div className=" list-none flex text-center flex-col gap-2 w-full px-2 py-1">
            <Link
              href={`/`}
              className="text-[1.2rem] text-slate-600 hover:bg-zinc-300 w-full py-2"
              onClick={() => {
                setToggle(!toggle);
                window.scrollTo(0, 0);
              }}
            >
              Home
            </Link>

            <Link
              href={`/#about`}
              className="text-[1.2rem] text-slate-600 hover:bg-zinc-300 w-full py-2"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              About
            </Link>

            <Link
              href={`/menu`}
              className="text-[1.2rem] text-slate-600 hover:bg-zinc-300 w-full py-2"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Menu
            </Link>
            <Link
              href={`/#gallery`}
              className="text-[1.2rem] text-slate-600 hover:bg-zinc-300 w-full py-2"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Gallery
            </Link>
            <Link
              href={`/#location`}
              className="text-[1.2rem] text-slate-600 hover:bg-zinc-300 w-full py-2"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Location
            </Link>
            <Link
              href={`/#testimonials`}
              className="text-[1.2rem] text-slate-600 hover:bg-zinc-300 w-full py-2"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Testimonials
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
