import Image from "next/image";
import whine from "../../public/whine.jpg";

export default function About() {
  return (
    <div className=" flex flex-col justify-center items-center gap-[3rem] py-[10rem] sm:px-16 px-[1rem]">
      <h1 className="text-[2.2rem] font-bold">Rreth lokalit</h1>
      <div
        className=" flex lg:flex-row flex-col xl:mx-[2rem] justify-around items-start gap-2 py-[6rem] mt-8
      bg-blured sm:px-[4rem] px-[1.5rem] rounded-[4rem]"
      >
        <div className=" sm:w-[80%] lg:w-[60rem] px-[1rem] md:py-[3rem] py-0">
          <p className="md:text-[1.3rem] text-[1.2rem]">
            Miresevini ne restorantin tone tradicional. Ushqimet me te fresketa
            dhe te shijeshme do to gjeni vetem tek ne. Sherbimi me i shpejte ne
            te gjitha plazhet per rreth. Plazhi jone ofron nje qetesi dhe nje
            relax te pa imagjinueshem. Gjithashtu kemi dhe nje staf te
            kompletuar me poshte kemi ushqimet tona tradicionale dhe mund te
            gjeni menune e plote duke klikuar butonin menuja e plote
          </p>
        </div>
        <div>
          <Image
            src={whine}
            alt="whine"
            width={1000}
            height={1000}
            className=" w-fit h-[30rem] object-cover rounded-tr-[5rem] rounded-bl-[5rem] xl:pt-0 pt-12"
          />
        </div>
      </div>
    </div>
  );
}