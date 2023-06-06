"use client";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Speciality from "./components/Speciality";
import Navbar from "./components/Navbar";
import Galery from "./components/Galery";
import Feedbacks from "./components/Testimonials";
import { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-[3rem] justify-center items-center bg-[#f1f1f7]">
      <BarLoader color="#3f3f3f" height={7} width={200} />
      <p className="text-[1.8rem] font-bold text-[#1f1f1d]">Loading...</p>
    </div>
  );
};

const Popup = ({ closePopup }: { closePopup: () => void }) => {
  return (
    <div className="w-full h-screen bg-black bg-opacity-60 fixed top-0 left-0 z-50 flex justify-center items-center">
      <div className="bg-white text-black sm:px-[5rem] px-[3rem] py-[2rem] flex flex-col justify-end items-end gap-4 rounded-lg">
        <p className=" sm:text-[1.9rem] text-[1.4rem] font-semibold">
          Wifi: 11111111 {"   "}{" "}
          <span className="text-[0.9rem] text-gray-500">[8 x 1]</span>
        </p>
        <button
          onClick={closePopup}
          className="px-4 py-2 bg-blue-600 text-white self-end rounded-md"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const hasPopupBeenShown = sessionStorage.getItem("hasPopupBeenShown");
    if (!hasPopupBeenShown) {
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          setIsPopupVisible(true);
        }, 1000);
        sessionStorage.setItem("hasPopupBeenShown", "true");
      }, 2000);
    } else {
      setIsLoading(false);
    }
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <About />
          {/* <Speciality /> */}
          <Galery />
          <Location />
          <Feedbacks />
          <Footer />
        </div>
      )}
      {isPopupVisible && <Popup closePopup={closePopup} />}
    </>
  );
}
