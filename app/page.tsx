import Image from "next/image";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Shared/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
