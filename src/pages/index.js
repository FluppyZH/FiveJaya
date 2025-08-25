import Head from 'next/head';
import FeaturedPost from '@/components/landing/FeaturedPost';
import PostCard from '@/components/landing/PostCard';
import LandingSidebar from '@/components/landing/LandingSidebar';
import TestimonialSection from '@/components/landing/TestimonialSection';

export default function HomePage() {
  const posts = [
    { 
      title: "Kenapa Siswa GAGAL SNBT?",
      category: "SNBT/UTBK", 
      excerpt: "Evaluasi supaya siap menjalani UTBK", 
      href: "/gagal-snbt", 
      imageUrl: "/avatars/utbk.jpg",
      author: { name: "Tim E-LearnQU!", imageUrl: "/avatars/team.jpg" },
      views: "2.5k"
    },
    { 
      title: "Simulasi Penalaran Matematika (UTBK)",
      category: "SNBT/UTBK", 
      excerpt: "Asah logika dan kecepatan analisismu dengan soal-soal PM terbaru sesuai standar SNBT.", 
      href: "/tobk", 
      imageUrl: "/avatars/utbk.jpg",
      author: { name: "Tim E-LearnQU!", imageUrl: "/avatars/team.jpg" },
      views: "3.1k"
    },
    { 
      title: "Pembahasan Materi Math Kelas 10,11,12",
      category: "Limit,Eksponen,Peluang", 
      excerpt: "Mengingat/Mempelajari kembali materi materi SMA", 
      href: "/materi/math", 
      imageUrl: "/avatars/materi.jpg",
      author: { name: "Andi P.", imageUrl: "/avatars/andi.jpg" },
      views: "1.8k"
    },
  ];

  return (
    <>
      <Head>
        <title>E-LearnQU | #GratisToUTBK</title>
      </Head>
      
      <div className="bg-slate-900 text-white">
        <FeaturedPost />
        
        <div className="container mx-auto px-6 py-12">
          <div className="mt-12 text-center">
            <h2 className="text-4xl font-extrabold text-blue-400 mb-4">
              Tentang E-LearnQU!
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              E-LearnQU adalah platform e-learning yang dirancang khusus untuk membantu siswa dan pebelajar
              di tingkatan SMA untuk menguasai konsep matematika secara mudah dan menyenangkan
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 mt-8">
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-4 mb-8">
                Materi & Simulasi Terbaru
              </h2>
              <div className="space-y-8">
                {posts.map((post, index) => (
                  <PostCard key={index} post={post} />
                ))}
              </div>
            </div>
            <LandingSidebar />
          </div>
        </div>
        <TestimonialSection />
      </div>
    </>
  );
}