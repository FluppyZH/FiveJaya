import Head from 'next/head';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import SuksesMAS from '@/components/landing/sukses';
import CoursePreviewSection from '@/components/landing/CoursePreviewSection';
import TestimonialSection from '@/components/landing/TestimonialSection';
import FinalCTASection from '@/components/landing/CTASection';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>E-LearnQU!</title>
        <meta name="description" content="Platform e-learning matematika terpadu dengan materi SMA, simulasi CBT, dan persiapan ToBK SNBT." />
      </Head>
      
      <div className="bg-slate-900 text-white">
        <HeroSection />
        <FeaturesSection />
        <SuksesMAS />
        <CoursePreviewSection />
        <TestimonialSection />
        <FinalCTASection />
      </div>
    </>
  );
}