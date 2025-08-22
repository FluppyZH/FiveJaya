<<<<<<< HEAD
import Head from 'next/head';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import SuksesMAS from '@/components/landing/sukses'; 
import CoursePreviewSection from '@/components/landing/CoursePreviewSection';
import TestimonialSection from '@/components/landing/TestimonialSection';
import FinalCTASection from '@/components/landing/CTASection'; 
import AboutSection from '@/components/landing/AboutSection';
=======
import Link from "next/link";
import Head from "next/head";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
>>>>>>> b1ba667e75dfe2313f37c7fd8143d0ea6362ad3f

export default function HomePage() {
  return (
    <>
      <Head>
<<<<<<< HEAD
        <title>E-LearnQU!</title>
        <meta name="description" content="Platform e-learning matematika terpadu dengan materi SMA, simulasi CBT, dan persiapan ToBK SNBT." />
      </Head>
      
      <div className="bg-slate-900 text-white">
        <HeroSection />
        <AboutSection/>
        <FeaturesSection />
        <SuksesMAS />
        <CoursePreviewSection />
        <TestimonialSection />
        <FinalCTASection />
      </div>
    </>
  );
}
=======
        <title>E-LearnQU!!!</title>
      </Head>
      <main className="w-full h-full">
        <HeroSection />
        <AboutSection />
      </main>
    </>
  );
}
>>>>>>> b1ba667e75dfe2313f37c7fd8143d0ea6362ad3f
