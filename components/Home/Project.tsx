"use client";
import React,{useState} from "react";
import { fraunces } from "../Shared/Font";
import MagicContainer from "../ui/magiccard";
import Link from "next/link";
import Image from 'next/image'
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
      thumbnail: "/images/projects/odbiolab.jpg",
      title: "OdBiolab",
      liveLink:"https://odbiolab.com/",
      description: "Built ODBiolab, a bilingual peptide education platform using Laravel, PHP, and Bootstrap with responsive UI, calculators, and admin system.",
      skill: ["PHP", "Laravel", "Bootstrap", "Javascript", "HTML", "CSS"],
    },
    {
      thumbnail: "/images/projects/agencyai.png",
      title: "Agency.AI",
      liveLink:"https://agency-ai-one-indol.vercel.app/",
      description: "A modern and responsive landing page built with Next.js, styled using Tailwind CSS, and enhanced with smooth animations using Framer Motion.",
      skill: ["Next.js", "React", "Tailwind Css", "Framer Motion"],
    },
    {
      thumbnail: "/images/projects/tytan.png",
      title: "Tytan Tech",
      liveLink:"https://www.tytantech.com/",
      description: "Modern agency website built with Next.js and Tailwind CSS, featuring responsive design, fast performance, and professional business presentation.",
      skill: ["Next.js", "React", "Tailwind Css", "Node Js", "Express Js"],
    },
    {
      thumbnail: "/images/projects/sanivast.jpg",
      title: "Sanivast",
      liveLink:"https://sanivast.com/",
      description: "Professional restoration business website offering sanitation, commercial cleaning, tile repair, and re-grouting services with modern responsive design.",
      skill: ["PHP", "Laravel", "Bootstrap", "Javascript", "HTML", "CSS"],
    },
    {
      thumbnail: "/images/projects/christopher.jpg",
      title: "Christopher",
      liveLink:"https://christopherr808-frontend.vercel.app/",
      description: "Modern fitness platform for gym training management, coach services, and fitness equipment selling with responsive and user-friendly design.",
      skill: ["Next.js", "React", "Tailwind Css", "API", "Redux Toolkit"],
    },
    {
      thumbnail: "/images/projects/haquebajar.jpg",
      title: "Hoque Bazar",
      liveLink:"https://www.hoquebazar.com/",
      description: "Laravel-based grocery ecommerce platform featuring product management, online ordering, responsive design, and seamless shopping experience for customers.",
      skill: ["Laravel", "Bootstrap", "MySql"],
    },
  ];
  
  const [length, setLength] = useState(6);

  return (
    <div id="projects">
      <div className="custom-container border-t py-10">
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

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.slice(0,length).map((data, idx) => (
            <MagicContainer key={idx} className="rounded-xl ">
              <div className="p-5 md:p-6 bg-white rounded-xl h-full border border-gray-200 space-y-3"
              >

               <Image src={data.thumbnail}  height={300} width={300}  unoptimized quality={100} loading="eager" className="h-[250px] w-full object-cover rounded-sm" alt={data.title}/> 
              
              <div className="space-y-3">
                
                    <h1 className={`${fraunces.className} text-lg font-semibold`}>
                    <Link href={data.liveLink} target="_blank" className=" hover:text-primary cursor-pointer"> {data.title}  </Link>
                    </h1>
                 
                  
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

                  <Link href={data.liveLink} target="_blank" className={`mt-5 ${fraunces.className} flex items-center gap-1 text-sm font-medium hover:text-primary`}>
                    <span>View Project</span>
                    <HiMiniArrowLongRight />
                  </Link>

                </div>
              </div>
            </MagicContainer>
          ))}
        </div>

        {
          projects.length > 6 &&  (
                  <div className="flex items-center justify-center mt-8">
                <button 
                  onClick={() =>
                    setLength(length >= projects.length ? 6 : projects.length)
                  }
                className={`${fraunces.className} cursor-pointer text-sm sm:text-base font-semibold flex items-center gap-2`}>
                  <span>
                  {length >= projects.length
                  ? "Show Less Project"
                  : "See More Project"}
                  </span> 
                  <HiMiniArrowLongRight />
                </button>
              </div>
          )
        }
       
      </div>
    </div>
  );
}
