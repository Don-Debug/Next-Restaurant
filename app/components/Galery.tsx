"use client";
import { SetStateAction, useState } from "react";
import galery from "@/constants/galery";
import Image from "next/image";

export default function Galery() {
  const [numDisplayed, setNumDisplayed] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleShowMore = () => {
    setNumDisplayed(galery.length);
    setIsExpanded(true);
  };

  const handleShowLess = () => {
    setNumDisplayed(6);
    setIsExpanded(false);
  };

  const handleView = (index: number | null) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div id="galeri" className="py-[4rem]">
      <div className="galery-bg my-[5rem] flex flex-col justify-center items-center w-full h-auto ">
        <h1 className="text-[2rem] font-bold text-center my-[3rem]">Gallery</h1>
        <div className="flex flex-row flex-wrap justify-center items-start lg:px-[5rem] md:px-[2rem] px-[1rem] py-[3rem] md:gap-10 sm:gap-4 gap-2">
          {galery.slice(0, numDisplayed).map((post, index) => (
            <div
              key={index}
              className="flex justify-center relative box-shadow md:w-[20rem] sm:w-[15rem] w-[10rem] h-auto overflow-hidden"
            >
              <Image
                src={post.image}
                alt={`${index}`}
                width={1000}
                height={1000}
                className=" w-[100%] md:h-[20rem] sm:h-[15rem] h-[10rem] object-cover pointer-events-none"
              />
              <button
                className="px-[1.5rem] py-[0.5rem] bg-transparent absolute w-full h-full"
                onClick={() => handleView(index)}
              ></button>
            </div>
          ))}
        </div>
        {!isExpanded && numDisplayed < galery.length && (
          <button
            className=" w-fit mx-auto my-[5rem] text-[1.2rem] px-[2rem] py-4 rounded-[2rem] bg-blured box-shadow"
            onClick={handleShowMore}
          >
            Show More
          </button>
        )}
        {isExpanded && (
          <button
            className=" w-fit mx-auto my-[5rem] text-[1.2rem] px-[2rem] py-4 rounded-[2rem] bg-blured box-shadow"
            onClick={handleShowLess}
          >
            Show Less
          </button>
        )}
      </div>
      {selectedImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center items-center">
          <div className="relative w-[95%] h-[90%] flex justify-center items-center py-8">
            <button
              className="absolute top-0 right-0 mr-[2rem] mt-[2rem] border border-black bg-white bg-opacity-50 px-2 py-1 rounded-md font-bold text-lg hover:text-red-600 z-40"
              onClick={handleClose}
            >
              X
            </button>
            <Image
              src={galery[selectedImageIndex].image}
              alt={`${[selectedImageIndex]}`}
              width={1000}
              height={1000}
              className="pointer-events-none sm:aspect-[1/0.8] aspect-[1/1.3] object-contain px-2 z-20"
            />
          </div>
        </div>
      )}
    </div>
  );
}
