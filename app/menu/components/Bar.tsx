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
            className="bg-blured px-[1rem] py-[1rem] w-[100%] text-center text-[1.5rem]
           rounded-[1.5rem] box-shadow mt-[5rem] uppercase"
          >
            {category.Name}
          </h1>
          <div className="w-[100%]">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="flex justify-between w-[100%] items-center border-[1px]
                border-white sm:px-8 px-4 py-4 rounded-[0.7rem] mt-[2rem] box-shadow"
              >
                <h1 className="text-[1.5rem]  font-bold uppercase">
                  {item.name}
                </h1>
                <p className=" underline font-bold text-[1.2rem]">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
