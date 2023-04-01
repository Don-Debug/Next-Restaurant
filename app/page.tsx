import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Speciality from "./components/Speciality";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Speciality />
      <Location />
      <Footer />
    </div>
  );
}
