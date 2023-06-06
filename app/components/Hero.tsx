import Link from "next/link";

export default function Hero() {
  return (
    <div className=" bg-hero-cool h-screen shadow-2xl">
      <div className=" py-8 px-8 relative"></div>
      <div className=" w-full">
        <p>
          <Link
            href={`/menu`}
            className=" absolute top-[10rem] right-[5rem] px-6 py-2 rounded-[2rem] bg-[#f1f1f7]  sm:flex hidden border-x-[5px] border-[#1f1f1d] text-[#1f1f1d] "
          >
            Menu
          </Link>
        </p>

        <h3
          className=" text-[1.3rem] w-[60%] h-[50rem] m-auto flex justify-center
         items-center text-center font-bold md:text-[2rem] sm:text-[1.5rem] text-[#f1f1f7]"
        >
          Miresevini ne shtepine e shijes dhe te qetesise Teo-Narte. Ketu eshte
          shtepia e relaxit dhe mbreti i ushqimit tradicional
        </h3>
      </div>
    </div>
  );
}
