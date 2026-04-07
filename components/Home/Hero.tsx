import React from "react";
import { fraunces } from "@/app/layout";
import { HiArrowLongRight } from "react-icons/hi2";
import Image from "next/image";
import { PiReadCvLogo } from "react-icons/pi";

export default function Hero() {
  return (
    <div className="py-10">
      <div className="custom-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-[60%_40%] gap-y-6 gap-x-4 justify-between items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-primary"></div>
              <p className="text-sm font-medium uppercase text-secondary">
                Open to Opportunities
              </p>
            </div>

            <div className="space-y-4">
              <h1
                className={`text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold text-text-primary ${fraunces.className} leading-[60px] sm:leading-[70px]  lg:leading-[80px]`}
              >
                Zia Uddin Bablu <br /> A Full-Stack Web Developer
              </h1>
              <h5 className="text-base md:text-lg font-medium text-secondary">
                4+ years of experience building scalable, high-performance
                applications using React, Next.js, Node.js, and Laravel. Focused
                on clean architecture, API development, and production-ready
                solutions.
              </h5>
            </div>

            <div className="flex flex-wrap gap-y-4 gap-x-5">
              <button className="bg-text-primary text-white px-6 py-3 rounded-full text-base font-medium flex items-center gap-2 cursor-pointer hover:-translate-y-1 duration-200">
                <span>Get In Touch</span>
                <HiArrowLongRight className="w-5 h-5" />
              </button>

              <button className="bg-transparent border border-secondary text-text-primary px-6 py-3 rounded-full text-base font-medium flex items-center gap-2 cursor-pointer hover:border-primary">
                <PiReadCvLogo className="w-5 h-5" />
                <span>Resume</span>
              </button>
            </div>
          </div>
          <div>
            <Image
              src="/images/zia-uddin-bablu.png"
              height="600"
              width="600"
              alt="Zia Uddin Bablu"
              unoptimized
              quality={100}
              loading="eager"
              className="object-contain max-w-[400px] w-full mx-auto h-auto rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
