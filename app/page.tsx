import Image from "next/image";
import HeroSection from "./home/HeroSection";
import Posts from "./home/Posts";
import CalloutSection from "./home/CalloutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-teal-600 text-white">
      <HeroSection />
      <Posts />
      <CalloutSection />
    </main>
  );
}
