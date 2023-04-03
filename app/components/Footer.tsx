import Link from "next/link";
import Image from "next/image";
import fb from "../../public/facebook-logo.png";
import ig from "../../public/ig-logo.png";
import phone from "../../public/Phone-Icon.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="px-[5rem] py-[4rem] flex flex-wrap md:flex-nowrap gap-[4rem] justify-between items-center bg-blured rounded-t-[2rem] box-shadow">
      <div className="flex flex-col gap-[2rem] justify-center items-start px-4">
        <h2 className="text-[1.6rem] font-bold text-center">Contact Us</h2>
        <Link
          href={`https://www.facebook.com/teo.narte.7`}
          target="blank"
          className="flex gap-5 items-center font-bold text-[1.2rem]"
        >
          <Image
            src={fb}
            alt="link"
            width={1000}
            height={1000}
            className="w-[3rem] h-[3rem] object-cover bg-blured rounded-[.7rem] p-[2px]"
          />
          Facebook
        </Link>
        <Link
          href={`https://www.instagram.com/teo_narte/`}
          target="blank"
          className="flex gap-5 items-center font-bold text-[1.2rem]"
        >
          <Image
            src={ig}
            alt="link"
            width={1000}
            height={1000}
            className="w-[3rem] h-[3rem] object-cover bg-blured rounded-[.7rem] p-[2px]"
          />
          Instagram
        </Link>
        <Link
          href={`tel:+355629019222`}
          className="flex gap-5 items-center font-bold text-[1.2rem]"
        >
          <Image
            src={phone}
            alt="link"
            width={1000}
            height={1000}
            className="w-[3rem] h-[3rem] object-cover bg-blured rounded-[.7rem] p-[2px]"
          />
          +355629019222
        </Link>
      </div>
      <div className=" flex flex-col justify-end items-center gap-8">
        <h1 className="text-[1.7rem] font-bold flex-wrap">
          Hapur qe nga 1 Qershori deri me 15 Shtator
        </h1>
        <h1 className="text-[1.8rem] font-bold flex-wrap">Wifi: 11111111</h1>

        <p className=" pt-[4rem] text-center font-medium text-[1.1rem] text-slate-200">
          &copy; Copyrights {currentYear} Teo Narte. All rights reserved.
          <br /> Made with love by{" "}
          <Link
            href={`https://github.com/Don-Debug`}
            target="blank"
            className=" text-black"
          >
            Debug
          </Link>
        </p>
      </div>
    </div>
  );
}
