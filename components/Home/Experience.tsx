import React from "react";
import { fraunces } from "../Shared/Font";
import MagicContainer from "../ui/magiccard";

interface Experiences {
  company: string;
  contract: string;
  position: string;
  description: string;
  skill: string[];
}

export default function Experience() {
  const experiences: Experiences[] = [
    {
      company: "Softvence Delta",
      contract: "Duration · 1 Year 2 Months",
      position: "Frontend Developer",
      description:
        "I worked as a Frontend Developer at Softvence Delta, where I built responsive and interactive user interfaces using React.js, Next.js, and Tailwind CSS. I collaborated with backend teams to integrate RESTful APIs and improve application performance. I also worked on state management and optimized applications using SSR and SEO best practices.",
      skill: ["Next.js", "React", "Tailwind Css", "API", "Redux Toolkit"],
    },
    {
      company: "Backbencher Studio",
      contract: "Duration · 7 Months",
      position: "Jr Frontend Developer",
      description:
        "Contributed to building and maintaining frontend features using React.js, Next.js, and Tailwind CSS. Worked on integrating APIs, improving UI responsiveness, and ensuring consistent user experience across devices. Collaborated with the team to enhance performance, code quality, and application scalability.",
      skill: ["Next.js", "React", "Tailwind Css", "API", "Redux Toolkit"],
    },
    {
      company: "Freelance",
      contract: "Self Employed · 2021 - Present",
      position: "Full-stack web developer",
      description:
        "Worked as a freelance full-stack developer delivering 70+ web applications for international clients using Laravel, React.js, Next.js, and Node.js. Handled end-to-end development including requirement analysis, API integration, UI development, and deployment. Focused on building scalable, performant, and user-friendly solutions with consistent client satisfaction.",
      skill: [
        "PHP",
        "Laravel",
        "Next.js",
        "React",
        "Tailwind Css",
        "Bootstrap",
        "API",
        "Redux Toolkit",
      ],
    },
  ];

  return (
    <div className="py-10">
      <div className="custom-container">
        <div className="space-y-4">
          <h2 className="uppercase text-sm text-secondary font-medium">
            Where I've Worked
          </h2>
          <h1 className={`${fraunces.className} text-4xl font-semibold`}>
            Experience
          </h1>
          <p className="text-base text-secondary font-medium">
            I build full-stack web applications, focusing on performance,
            scalability, and clean user experiences.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {experiences.map((experience, idx) => (
            <MagicContainer className="rounded-xl">
              <div
                key={idx}
                className="flex flex-col gap-5 md:grid md:grid-cols-[25%_75%] p-5 md:p-8 bg-white rounded-xl border border-gray-200"
              >
                <div className="space-y-2">
                  <h1 className={`${fraunces.className} text-lg font-semibold`}>
                    {experience.company}
                  </h1>
                  <h5 className="text-sm text-secondary font-medium">
                    {experience.contract}
                  </h5>
                </div>
                <div className="space-y-4">
                  <h1 className="text-base font-semibold">
                    {experience.position}
                  </h1>
                  <p className="text-sm text-secondary">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.skill.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-tag-bg border px-4 py-2 rounded-full text-xs text-center font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </MagicContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
