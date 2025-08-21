import Link from "next/link";
import Head from "next/head";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>E-LearnQU!!!</title>
      </Head>
      <main className="w-full h-full">
        <HeroSection />
        <AboutSection />
      </main>
    </>
  );
}
