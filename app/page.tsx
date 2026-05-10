import Image from "next/image";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Shared/Navbar";
import Experience from "@/components/Home/Experience";
import TechStack from "@/components/Home/TechStack";
import Project from "@/components/Home/Project";
import GetInTouch from "@/components/Home/GetInTouch";
import Footer from "@/components/Home/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <TechStack />
      <Project />
      <GetInTouch />
      <Footer />
    </div>
  );
}
