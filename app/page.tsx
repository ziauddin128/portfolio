import Image from "next/image";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Shared/Navbar";
import Experience from "@/components/Home/Experience";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
    </div>
  );
}
