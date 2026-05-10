"use client";
import React from "react";
import { fraunces } from "../Shared/Font";
import {
  FaBehanceSquare,
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaLongArrowAltRight,
} from "react-icons/fa";
import Link from "next/link";
import MagicContainer from "../ui/magiccard";

interface SocialLinks {
  icon: React.ReactNode;
  name: string;
  link: string;
}

export default function GetInTouch() {
  const socialLinks: SocialLinks[] = [
    {
      icon: <FaLinkedin className="size-5" />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/zia-uddin-bablu2000/",
    },
    {
      icon: <FaFacebookSquare className="size-5" />,
      name: "Facebook",
      link: "https://www.facebook.com/ziauddinapurvo.bablu",
    },
    {
      icon: <FaGithub className="size-5" />,
      name: "Github",
      link: "https://github.com/ziauddin128",
    },
    {
      icon: <FaBehanceSquare className="size-5" />,
      name: "Behance",
      link: "#",
    },
  ];

  return (
    <div className="py-10">
      <div className="custom-container">
        <div className="space-y-4">
          <h2 className="uppercase text-sm text-secondary font-medium">
            Get in Touch
          </h2>
          <h1 className={`${fraunces.className} text-4xl font-semibold`}>
            Contact
          </h1>
          <p className="text-base text-secondary font-medium">
            Have a role, partnership, or collaboration in mind? I'd love to hear
            from you.
          </p>
        </div>

        <div className="mt-10 flex flex-col md:grid md:grid-cols-2 gap-5">
          <div className="bg-white rounded-sm p-6 border">
            <h1 className={`${fraunces.className} text-lg font-semibold`}>
              Send me a message
            </h1>

            <form action="" className="mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    className="w-full p-2 rounded-md border border-gray-300 focus:outline-none"
                  />
                  <p className="error"></p>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className="w-full p-2 rounded-md border border-gray-300 focus:outline-none"
                  />
                  <p className="error"></p>
                </div>

                <div className="col-span-2">
                  <label className="text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="Enter your subject"
                    name="subject"
                    className="w-full p-2 rounded-md border border-gray-300 focus:outline-none"
                  />
                  <p className="error"></p>
                </div>

                <div className="col-span-2">
                  <label className="text-sm font-medium mb-2">Message</label>
                  <textarea
                    placeholder="Enter your message"
                    name="message"
                    className="w-full h-20 p-2 rounded-md border border-gray-300 focus:outline-none"
                  ></textarea>
                  <p className="error"></p>
                </div>
              </div>

              <button className="mt-4 bg-text-primary text-white px-6 py-3 rounded-full text-base font-medium flex items-center gap-2 cursor-pointer hover:-translate-y-1 duration-200">
                <span>Send Message</span>
                <FaLongArrowAltRight />
              </button>
            </form>
          </div>
          <div>
            <h1
              className={`${fraunces.className} text-xl md:text-3xl font-semibold`}
            >
              Connect with me
            </h1>

            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2 sm:gap-4 mt-4">
              {socialLinks.map((item, idx) => (
                <MagicContainer key={idx} className="rounded-sm">
                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex items-center gap-3 text-base p-5  bg-white rounded-sm border"
                  >
                    {item.icon}
                    <div>
                      <h1
                        className={`text-xl font-medium ${fraunces.className}`}
                      >
                        {item.name}
                      </h1>
                    </div>
                  </Link>
                </MagicContainer>
              ))}
            </div>

            <h1 className={`mt-4 ${fraunces.className} text-xl font-semibold`}>
              Or direct mail at
            </h1>
            <Link
              className="mt-2 inline-block text-base sm:text-xl font-medium  text-primary hover:underline"
              href="mailto:ziauddindev2000@gmail.com"
            >
              ziauddindev2000@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
