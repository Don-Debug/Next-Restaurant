import Link from "next/link";
export default function CheckBill() {
  return (
    <div>
      <h1 className="bg-blured px-[1rem] py-[1rem] w-[100%] text-center text-[1.5rem] rounded-[1.5rem] box-shadow">
        Check Your bill
      </h1>
      <div className="bg-blured w-full h-auto mt-8 rounded-[1rem]">
        <h1 className=" text-center py-2 text-[1.5rem] font-bold">Teo Narte</h1>
        <p className=" text-center py-2 text-[1.2rem] font-medium">
          Kliko artikujt te shikosh faturen
        </p>
        <div className="px-6">
          <div
            className="flex flex-row justify-between items-center
           px-8 py-3 border-b-[1px] border-t-[1px] border-white mt-4"
          >
            <p>Emri</p>
            <p>Sasia</p>
            <p>Cmimi</p>
          </div>
          <div className="flex flex-col overflow-y-auto snap-y snap-mandatory vertical-sb gap-5 h-[15rem]">
            <div
              className="flex flex-row justify-between items-center
            px-8 py-1 mt-1"
            >
              <p>Koce</p>
              <p>1</p>
              <p>800L/8€</p>
            </div>
          </div>
          <div
            className="flex flex-row justify-between items-center
           px-8 py-3 border-t-[2px] border-white mt-4"
          >
            <p className="font-bold text-[1.5rem]">Total</p>
            <p className="font-bold text-[1.1rem]">800L/8€</p>
          </div>

          <p className=" text-center py-8">
            Made by{" "}
            <Link
              href={`https://github.com/Don-Debug`}
              target="blank"
              className=" underline font-bold"
            >
              Debug
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
