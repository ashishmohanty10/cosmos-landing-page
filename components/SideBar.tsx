"use client";

import Link from "next/link";
import React from "react";
import Star from "@/public/star.png";
import Image from "next/image";
// import { secondaryFont } from "@/app/layout";
import { usePathname } from "next/navigation";

const linksAndImages = [
  { name: "Home", href: "/", alt: "star", image: Star },
  { name: "Factions", href: "/factions", alt: "star", image: Star },
  { name: "Roadmap", href: "/roadmap", alt: "star", image: Star },
  { name: "Collaborations", href: "/collaborations", alt: "star", image: Star },
  { name: "FAQ", href: "/faq", alt: "star", image: Star },
];

const SideBar = () => {
  const pathname = usePathname();

  return (
    <nav
      className={`fixed top-50 left-0 -translate-x-0.5 -translate-y-0.5 flex items-center justify-center max-h-screen rotate-90 gap-10 text-sm font-semibold  px-4 w-[150px] text-secondaryFont`}
    >
      {linksAndImages.map((item, index) => (
        <div key={index} className="flex items-center gap-5">
          <Link
            href={item.href}
            className={`${
              pathname === item.href
                ? "text-white"
                : "text-white/70 hover:text-white transition"
            }`}
          >
            {item.name}
          </Link>
          {index === linksAndImages.length - 1 ? null : (
            <Image src={item.image} alt={item.alt} />
          )}
        </div>
      ))}
    </nav>
  );
};

export default SideBar;
