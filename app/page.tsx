import Image from "next/image";
import HeroSection from "./home/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-teal-400 text-white">
      <HeroSection />
    </main>
  );
}
