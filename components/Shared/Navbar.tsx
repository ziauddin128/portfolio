"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { fraunces } from "./Font";

interface Menus {
  label: string;
  url: string;
  id: string;
}

export default function Navbar() {
  const menus: Menus[] = [
    {
      label: "Experience",
      url: "#",
      id: "#experience",
    },
    {
      label: "Projects",
      url: "#",
      id: "#projects",
    },
    {
      label: "Skills",
      url: "#",
      id: "#skills",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    };
  
    window.addEventListener("resize", handleResize);
  
    handleResize();
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full py-2 sm:py-3 border-b border-gray-100 bg-white z-10">
      <div className="custom-container">
        <div className="flex gap-2 items-center justify-between">
          <Link href="/">
            <Image
              src="/images/zia-uddin-bablu.png"
              height={48}
              width={48}
              alt="Logo"
              unoptimized
              quality={100}
              loading="eager"
              className="h-12 w-12 rounded-full"
            />
          </Link>

          <button
            onClick={() => setShowMenu(true)}
            className="block md:hidden cursor-pointer"
          >
            <HiMiniBars3 className="w-8 h-8" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {menus.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.url}
                    className="text-base font-medium text-secondary hover:text-text-primary duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="#"
              className="bg-text-primary text-white px-5 py-2 rounded-full text-base font-medium hover:-translate-y-1 duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
          showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowMenu(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed top-0 right-0 h-dvh overflow-auto w-[240px] bg-white shadow-sm pt-20 px-5 pb-6 z-50
        transform transition-transform duration-300 ease-in-out
        ${showMenu ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            onClick={() => setShowMenu(false)}
            className="absolute top-3 right-3 p-1 cursor-pointer"
          >
            <IoCloseOutline className="w-7 h-7 text-red-500" />
          </button>

          <ul className="flex flex-col items-center gap-10">
            {menus.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.url}
                  className={`text-xl font-semibold text-secondary hover:text-text-primary duration-200 ${fraunces.className}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
