import Image from "next/image";
import Link from "next/link";
import fish from "@/public/whine.jpg";
export default function Speciality() {
  return (
    <div className=" mt-[5rem] px-4" id="speciality">
      <h1 className=" text-center text-[2rem] font-bold">Specialitetet</h1>

      <div className="flex justify-around items-center md:flex-row flex-col gap-[1.5rem] mt-[8rem]">
        <div
          className="lg:flex-row sm:flex md:flex-col gap-5 sm:items-start md:items-center lg:items-start items-center
         bg-[#f1f1f7] px-[2rem] py-[2rem] rounded-[0.8rem] shadow-2xl"
        >
          <div>
            <Image
              src={fish}
              alt="image"
              width={1000}
              height={1000}
              className="w-[15rem] h-[15rem] object-cover rounded-[1rem] pointer-events-none"
            />
          </div>
          <div className="w-[70%] ">
            <h3 className="text-[1.6rem] font-bold py-4">Tave ngjale</h3>
            <p className=" w-fit text-[1.2rem]">
              Nje nga specialitetet tona esht tava e ngjales te cilen mund ta
              gatuajm ne dy menyra me patate dhe perime te tjera ose me qepe qe
              eshte menyra me tradicionale.
            </p>
          </div>
        </div>
        <div
          className="lg:flex-row sm:flex md:flex-col gap-5 sm:items-start md:items-center
         lg:items-start items-center bg-[#f1f1f7] px-[2rem] py-[2rem] rounded-[0.8rem] shadow-2xl"
        >
          <div>
            <Image
              src={fish}
              alt="image"
              width={1000}
              height={1000}
              className="w-[15rem] h-[15rem] object-cover rounded-[1rem] pointer-events-none"
            />
          </div>
          <div className="w-[70%]">
            <h3 className="text-[1.6rem] font-bold py-4">Tave ngjale</h3>
            <p className="w-fit text-[1.2rem]">
              Nje nga specialitetet tona esht tava e ngjales te cilen mund ta
              gatuajm ne dy menyra me patate dhe perime te tjera ose me qepe qe
              eshte menyra me tradicionale.
            </p>
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center">
        <Link
          href={`/menu`}
          className=" w-fit mx-auto my-[5rem] text-[1.2rem] px-[2rem] py-4 rounded-[2rem] bg-[#f1f1f7] shadow-2xl border-x-[3px] border-[#1f1f1d] text-[#1f1f1d] "
        >
          Menuja e plote
        </Link>
      </div>
    </div>
  );
}
