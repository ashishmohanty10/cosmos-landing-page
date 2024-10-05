import Image from "next/image";
import React from "react";
import heroImg from "@/public/image 2.jpg";
import Navbar from "./HomeNavbar";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="h-screen ">
      <Navbar />
      <div className="absolute top-0 left-0 -z-10 h-screen">
        <Image src={heroImg} alt="HeroImg" className="h-screen object-cover" />
      </div>

      <div className="text-center flex  flex-col justify-center items-center w-full my-56 space-y-5">
        <h3 className="text-7xl font-bold tracking-wide ">FROM DUSK TO DAWN</h3>

        <div className="flex items-center gap-5">
          <Button text="Play" size="md" active={false} />
          <Button text="Explore" size="large" active={true} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
