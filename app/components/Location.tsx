import Link from "next/link";
import Image from "next/image";
import map from "../../public/map.png";
export default function Location() {
  return (
    <div id="location">
      <h1 className=" text-center text-[2rem] mt-[10rem] font-bold">
        Location
      </h1>
      <div className="md:w-[80%] w-[95%] aspect-[1/0.7] bg-blured mx-auto mt-[7rem] box-shadow mb-[11rem]">
        <Link
          href={`https://www.google.com/maps/place/Teo+Narte/@40.4909636,19.4310598,17.75z/data=!4m6!3m5!1s0x134531c7fa62f781:0xb03eaebbcf9603c0!8m2!3d40.4910618!4d19.4302856!16s%2Fg%2F11jy0jn408`}
          target="blank"
        >
          <Image
            src={map}
            alt="map"
            width={2000}
            height={2000}
            className="h-full w-full object-cover"
          />
        </Link>
      </div>
    </div>
  );
}
