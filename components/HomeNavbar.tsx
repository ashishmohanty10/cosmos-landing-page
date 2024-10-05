import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/Logo.svg";
import social1 from "@/public/social.svg";
import social2 from "@/public/social2.svg";
import social3 from "@/public/sockial3.svg";
import Button from "./Button";

const socials = [
  { img: social1, alt: "Social 1", href: "#" },
  { img: social2, alt: "Social 2", href: "#" },
  { img: social3, alt: "Social 3", href: "#" },
];

const Navbar = () => {
  return (
    <nav className="w-[1200px] min-w-[400px] p-4 flex justify-between items-center sticky top-0 backdrop-blur-sm z-50">
      <Link href="/">
        <Image src={Logo} alt="Logo" className="w-full h-full " />
      </Link>

      <div className="flex items-center gap-5">
        {socials.map((item, idx) => (
          <Link href={"#"} key={idx} className="flex items-center gap-32">
            <Image
              src={item.img}
              alt={item.alt}
              width={24}
              height={24}
              className="flex item-center justify-between p-0 m-0 w-fit"
            />
          </Link>
        ))}

        <Button text="Log In" size="large" active={false} />
      </div>
    </nav>
  );
};

export default Navbar;
