import React from "react";
import { fraunces } from "../Shared/Font";
import MagicContainer from "../ui/magiccard";
import Link from "next/link";
import { HiMiniArrowLongRight } from "react-icons/hi2";

interface Projects {
  thumbnail: string;
  title: string;
  liveLink: string;
  description: string;
  skill: string[];
}

export default function Project() {
  const projects: Projects[] = [
    {
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUT2jLYoIC9Lg65AVA5KhEUdJdWFm0-vznZg&s",
      title: "Dopefolio",
      liveLink:"#",
      description: "A successful Open-Source portfolio template featured on CSS-Tricks, Hostinger, and used by thousands of developers globally.",
      skill: ["Next.js", "React", "Tailwind Css", "API", "Redux Toolkit"],
    },
  
  ];

  return (
    <div className="py-10">
      <div className="custom-container">
        <div className="space-y-4">
          <h2 className="uppercase text-sm text-secondary font-medium">
          Hand-Coded Work
          </h2>
          <h1 className={`${fraunces.className} text-4xl font-semibold`}>
          Projects
          </h1>
          <p className="text-base text-secondary font-medium">
          Real projects I built from scratch, line by line, with no AI tools. Just HTML, CSS, JavaScript, and React.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {projects.map((data, idx) => (
            <MagicContainer className="rounded-xl">
              <div
                key={idx}
                className="p-5 md:p-8 bg-white rounded-xl border border-gray-200"
              >
                <div className="space-y-2">
                  <h1 className={`${fraunces.className} text-lg font-semibold`}>
                    {data.title}
                  </h1>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-secondary">
                    {data.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {data.skill.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-tag-bg border px-4 py-2 rounded-full text-xs text-center font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <Link href="#">
                  <span>View Live Project</span>
                  <HiMiniArrowLongRight />
                  </Link>

                </div>
              </div>
            </MagicContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
