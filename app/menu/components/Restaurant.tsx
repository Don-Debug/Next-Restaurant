import Link from "next/link";
import RestaurantMenu from "../../constmenu/Restaurantmenu";
import { it } from "node:test";

export default function Restaurant() {
  return (
    <div className="flex flex-col gap-[2rem] w-[100%] mt-[2rem] pb-[5rem]">
      {RestaurantMenu.map((category) => (
        <div
          key={category.Name}
          className="flex flex-col justify-center items-start gap-[1rem] w-[100%]"
        >
          <h1 className="bg-blured px-[1rem] py-[1rem] w-[100%] text-center text-[1.5rem] rounded-[1.5rem] box-shadow mt-[5rem]">
            {category.Name}
          </h1>
          <div className="w-[100%]">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="flex justify-between w-[100%] items-center border-[1px]
                 border-white sm:px-8 px-4 py-4 rounded-[0.7rem] mt-[2rem] box-shadow"
              >
                <div>
                  <h1 className="text-[1.5rem]  font-bold">{item.name}</h1>
                  <p>{item.ingredients}</p>
                </div>
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
