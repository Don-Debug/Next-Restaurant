import barMenu from "../../constmenu/Barmenu";
import React, { useState } from "react";

export default function Bar() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMenu = barMenu.filter((category) =>
    category.items.some((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="flex flex-col gap-[2rem] w-[100%] mt-[1rem] pb-[5rem]">
      <input
        type="text"
        placeholder="Search menu items"
        autoComplete="none"
        value={searchQuery}
        autoCorrect="none"
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-3 py-3 rounded-lg shadow-md focus:outline-none block w-full sm:text-sm border border-[#cdcdcd]"
      />
      {filteredMenu.map((category, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-start gap-[1rem] w-[100%]"
        >
          <h1
            className="bg-[#f1f1f7] px-[1rem] py-[1rem] md:w-[50%] w-[90%] text-center text-[1.5rem]
           rounded-[1.5rem] shadow-md mt-[5rem] uppercase mx-auto"
          >
            {category.Name}
          </h1>
          <div className="w-[100%] flex flex-wrap gap-4 justify-center items-center">
            {category.items
              .filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-start w-fit items-center gap-4
                 sm:px-8 px-4 py-4 rounded-[0.7rem] bg-[#f1f1f7] mt-[2rem] shadow-xl border border-[#cdcdcd]"
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
