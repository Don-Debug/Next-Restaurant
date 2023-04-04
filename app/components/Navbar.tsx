"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/restaurant-1.jpg";
import { CgMenuRight, CgClose } from "react-icons/cg";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className=" flex justify-between items-center md:px-14 px-5 md:py-5 py-2
     bg-blured rounded-[1.5rem] fixed z-40 w-[97%] lg:top-[1rem] top-[0.3rem] md:left-4 sm:left-2 left-1 right-4"
    >
      <div className=" flex justify-center items-center gap-2 ">
        <Image
          src={logo}
          alt="logo"
          width={1000}
          height={1000}
          className=" rounded-full w-[50px] h-[50px]"
        />
        <h2 className=" sm:text-[1.6rem] text-[1.3rem] font-bold">Teo-Narte</h2>
      </div>
      <div>
        <ul className="justify-center items-center gap-9  sm:flex hidden">
          <li>
            <Link
              href={`/`}
              className="text-[1.2rem] "
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link href={`#about`} className="text-[1.2rem]">
              About
            </Link>
          </li>
          <li>
            <Link href={`#location`} className="text-[1.2rem]">
              Location
            </Link>
          </li>
        </ul>
        <div className=" sm:hidden flex">
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
              !toggle ? " hidden" : " flex"
            } py-6 px-6 absolute top-24 right-3 w-[70%] z-10 
            rounded-xl bg-small-menu flex items-center justify-center`}
          >
            <ul className=" list-none flex justify-center items-center text-center flex-col gap-6 w-full px-2 py-1">
              <li>
                <Link
                  href={`/`}
                  className="text-[1.2rem] text-slate-600"
                  onClick={() => {
                    setToggle(!toggle);
                    window.scrollTo(0, 0);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={`#about`}
                  className="text-[1.2rem] text-slate-600"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={`#location`}
                  className="text-[1.2rem] text-slate-600"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href={`/menu`}
                  className="text-[1.2rem] text-slate-600"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  Menu
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
