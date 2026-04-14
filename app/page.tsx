import Image from "next/image";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Shared/Navbar";
import Experience from "@/components/Home/Experience";
import TechStack from "@/components/Home/TechStack";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <TechStack/>
    </div>
  );
}
