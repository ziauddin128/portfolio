"use client";
import React from "react";
import { fraunces } from "../Shared/Font";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

interface Tech {
  category: string;
  techs: {
    name: string;
    icon: string;
  }[];
}

export default function TechStack() {
  const techStack: Tech[] = [
    {
      category: "Languages",
      techs: [
        {
          name: "JavaScript (ES6)",
          icon: "/images/tech/js.png",
        },
        {
          name: "Typescript",
          icon: "/images/tech/typescript.png",
        },
        {
          name: "PHP",
          icon: "/images/tech/php.png",
        },
      ],
    },
    {
      category: "Frontend",
      techs: [
        {
          name: "React Js",
          icon: "/images/tech/react.png",
        },
        {
          name: "Next Js",
          icon: "/images/tech/next.png",
        },
        {
          name: "Redux Toolkit",
          icon: "/images/tech/redux.png",
        },
        {
          name: "Context API",
          icon: "/images/tech/react.png",
        },
        {
          name: "HTML5",
          icon: "/images/tech/html.png",
        },
        {
          name: "CSS",
          icon: "/images/tech/css.png",
        },
        {
          name: "Tailwind CSS",
          icon: "/images/tech/tailwind.png",
        },
        {
          name: "Bootstrap",
          icon: "/images/tech/bootstrap.png",
        },
        {
          name: "jQuery",
          icon: "/images/tech/jquery.webp",
        },
        {
          name: "shadcn/ui",
          icon: "/images/tech/shadcn.png",
        },
        {
          name: "Ajax",
          icon: "/images/tech/ajax.png",
        },
      ],
    },
    {
      category: "Backend",
      techs: [
        {
          name: "Node Js",
          icon: "/images/tech/nodejs.png",
        },
        {
          name: "Express Js",
          icon: "/images/tech/express.png",
        },
        {
          name: "Laravel",
          icon: "/images/tech/laravel.png",
        },
        {
          name: "RESTful APIs",
          icon: "/images/tech/restfulapis.png",
        },
      ],
    },
    {
      category: "Database",
      techs: [
        {
          name: "MySQL",
          icon: "/images/tech/mysql.png",
        },
        {
          name: "MongoDB",
          icon: "/images/tech/mongodb.svg",
        },
      ],
    },
    {
      category: "State Management",
      techs: [
        {
          name: "Axios",
          icon: "/images/tech/axios.png",
        },
        {
          name: "TanStack Query",
          icon: "/images/tech/tanstack.png",
        },
      ],
    },
    {
      category: "Other Tools",
      techs: [
        {
          name: "Postman",
          icon: "/images/tech/postman.webp",
        },
        {
          name: "Insomnia",
          icon: "/images/tech/insomonia.png",
        },
        {
          name: "GitHub",
          icon: "/images/tech/github.png",
        },
        {
          name: "Vercel",
          icon: "/images/tech/vercel.jpg",
        },
        {
          name: "Netlify",
          icon: "/images/tech/netlify.webp",
        },
      ],
    },
  ];

  return (
    <div className="py-10">
      <div className="custom-container">
        <div className="space-y-4">
          <h2 className="uppercase text-sm text-secondary font-medium">
            Expertise
          </h2>
          <h1 className={`${fraunces.className} text-4xl font-semibold`}>
            My Skill Set
          </h1>
          <p className="text-base text-secondary font-medium">
            Focused on modern technologies and digital innovation
          </p>
        </div>

        <div className="mt-10 space-y-6 md:space-y-8">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col md:grid md:grid-cols-[15%_85%] items-start gap-4 w-full"
            >
              <h2 className="text-sm sm:text-base lg:text-lg font-semibold">
                {tech.category}:
              </h2>
              <div className="flex flex-wrap gap-4">
                {tech.techs.map((techItem, idx) => (
                  <Tilt key={idx}>
                    <div className="flex gap-2 cursor-pointer items-center border border-gray-200 py-2 px-5 rounded-full">
                      <Image
                        src={techItem.icon}
                        height={30}
                        width={30}
                        quality={100}
                        unoptimized
                        loading="eager"
                        alt={techItem.name}
                        className="h-6 w-6 object-contain"
                      />
                      <span className="text-sm sm:text-base font-medium">
                        {techItem.name}
                      </span>
                    </div>
                  </Tilt>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
