import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Speciality from "./components/Speciality";
import Navbar from "./components/Navbar";
import Galery from "./components/Galery";
import Feedbacks from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Speciality />
      <Galery />
      <Location />
      <Feedbacks />
      <Footer />
    </div>
  );
}
