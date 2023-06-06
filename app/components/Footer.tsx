import Link from "next/link";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="px-[5rem] py-[4rem] flex flex-wrap md:flex-nowrap gap-[4rem] justify-between items-center bg-[#f1f1f7] shadow-2xl">
      <div className="flex flex-col gap-[2rem] justify-center items-start px-4">
        <h1 className="text-[1.6rem] font-bold text-center">Contact Us</h1>
        <Link
          href={`https://www.facebook.com/teo.narte.7`}
          target="blank"
          className="flex gap-5 items-center font-bold text-[1.2rem]"
        >
          <div className="w-[3rem] h-[3rem] object-cover flex justify-center items-center bg-[#1f1f1d] rounded-[.7rem] p-[2px] pointer-events-none">
            <BsFacebook size={35} color="#f1f1f7" />
          </div>
          Teo Narte
        </Link>
        <Link
          href={`https://www.instagram.com/teo_narte/`}
          target="blank"
          className="flex gap-5 items-center font-bold text-[1.2rem]"
        >
          <div className="w-[3rem] h-[3rem] object-cover flex justify-center items-center bg-[#1f1f1d] rounded-[.7rem] p-[2px] pointer-events-none">
            <BsInstagram size={35} color="#f1f1f7" />
          </div>
          teo_narte
        </Link>
        <Link
          href={`tel:+355672957798`}
          className="flex gap-5 items-center font-bold text-[1.2rem]"
        >
          <div className="w-[3rem] h-[3rem] object-cover flex justify-center items-center bg-[#1f1f1d] rounded-[.7rem] p-[2px] pointer-events-none">
            <BsFillTelephoneFill size={30} color="#f1f1f7" />
          </div>
          +355672957798
        </Link>
      </div>
      <div className=" flex flex-col justify-end items-center gap-8">
        <h1 className="text-[1.7rem] font-bold flex-wrap">
          Hapur qe nga 1 Qershori deri me 15 Shtator
        </h1>
        <h1 className="text-[1.8rem] font-bold flex-wrap">Wifi: 11111111</h1>

        <p className=" pt-[4rem] text-center font-medium text-[1.1rem] text-[#7f7f7f]">
          &copy; Copyrights {currentYear} Teo Narte. All rights reserved.
          <br />
          Designed and Developed by{" "}
          <Link
            href={`https://github.com/Don-Debug`}
            target="blank"
            className="text-blue-500"
          >
            Debug
          </Link>
        </p>
      </div>
    </div>
  );
}
