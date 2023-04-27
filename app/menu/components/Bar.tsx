import Link from "next/link";
import barMenu from "../../constmenu/Barmenu";

export default function Bar() {
  return (
    <div className="flex flex-col gap-[2rem] w-[100%] mt-[2rem] pb-[5rem]">
      {barMenu.map((category, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-start gap-[1rem] w-[100%]"
        >
          <h1
            className="bg-[#2F2F2F] px-[1rem] py-[1rem] md:w-[50%] w-[90%] text-center text-[1.5rem]
           rounded-[1.5rem] box-shadow mt-[5rem] uppercase mx-auto"
          >
            {category.Name}
          </h1>
          <div className="w-[100%] flex flex-wrap gap-8 justify-center items-center">
            {category.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-start w-fit items-center gap-4
                 sm:px-8 px-4 py-4 rounded-[0.7rem] mt-[2rem] menu-shadow border border-[#1f1f1f]"
              >
                <h1 className="text-[1.5rem] font-bold uppercase">
                  {item.name}
                </h1>
                <p className="font-bold text-[1.2rem]">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
