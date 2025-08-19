import Hero1_card from "./Hero1_card";
import Hero1_written from "./Hero1_written";
import Hero1_nav from "./Hero1_nav";
import { useRef } from "react";


export default function Hero1() {
  const audioRef = useRef(null);

  return (
    <div className="">
      <div className="pt-6">
        <Hero1_nav />
      </div>
      <div className="flex items-center justify-around">

        <div>
          <Hero1_card />
        </div>

        <div className=" hidden xl:block pb-30">
          <Hero1_written />
        </div>
      </div>
    </div>
  );
}