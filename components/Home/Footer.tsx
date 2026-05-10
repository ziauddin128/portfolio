"use client";
import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

export default function Footer() {

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-10">
      <div className="custom-container">
        <div className="border-t flex flex-wrap justify-between items-center gap-2 pt-5">
          <p className="text-sm font-medium text-secondary">© 2026 - All right reserved Zia</p>
          <button className="flex items-center gap-2 rounded-full bg-text-primary text-white text-sm font-medium py-2 px-4 cursor-pointer hover:-translate-y-1 duration-300" onClick={handleScrollTop}>
            <span>Top</span>
            <FaLongArrowAltUp />
          </button>
        </div>
      </div>
    </div>
  );
}
