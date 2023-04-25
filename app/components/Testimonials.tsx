import testimonials from "@/constants/testimonials";
import Link from "next/link";

const Feedbacks = () => {
  return (
    <div className="my-[15rem]" id="testimonials">
      <div>
        <h1 className=" text-center text-[2rem] mt-[5rem] font-bold">
          Testimonials.
        </h1>
        <p className="text-center">
          Give Us a Feedback in{" "}
          <Link
            href={`https://www.google.com/search?q=teo+narte&oq=teo+narte&aqs=chrome..69i57j69i60l3.8305j0j7&sourceid=chrome&ie=UTF-8#lrd=0x134531c7fa62f781:0xb03eaebbcf9603c0,3,,,,`}
            className="text-blue-300"
            target="blank"
          >
            Google
          </Link>
        </p>
      </div>
      <div className="mt-10 w-[90%] mx-auto flex overflow-x-auto snap-x snap-mandatory vertical-sb gap-3 py-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 snap-center">
            <div className="bg-blured p-5 rounded-[0.8rem] xs:w-[320px] w-full max-w-[320px]">
              <p className="text-white font-black text-[48px]">&quot;</p>

              <div className="mt-1">
                <p className="text-white tracking-wider text-[18px] whitespace-normal">
                  {testimonial.testimonial}
                </p>

                <div className="mt-7 flex justify-between items-center gap-1">
                  <p className=" text-white font-medium text-[1.3rem] underline">
                    <span className="text-blue-800">#</span> {testimonial.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
