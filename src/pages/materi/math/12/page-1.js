import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function LimitPage1() {
  return (
    <div className="bg-slate-900 text-white min-h-screen p-8">
      <Head>
        <title>Limit: Pengertian dan Sifat Dasar | Bagian 1</title>
      </Head>

      <div className="container mx-auto px-6 py-12">
        <Link 
          href="/materi/math/12" 
          className="text-blue-400 hover:text-blue-500 transition-colors flex items-center mb-8"
        >
          &larr; Kembali ke Materi Limit Kelas 12
        </Link>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
          Limit: Pengertian dan Sifat Dasar
        </h1>
        
        <div className="prose prose-invert text-base sm:text-lg text-slate-300 mb-8">
          <p>
            Limit dalam matematika adalah konsep yang digunakan untuk menggambarkan perilaku fungsi ketika variabelnya mendekati nilai tertentu.
          </p>
          <p>
            Dalam bahasa yang lebih sederhana, limit adalah nilai yang didekati oleh suatu fungsi ketika variabelnya mendekati nilai tertentu, tetapi tidak harus sama dengan nilai fungsi pada titik tersebut.
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 mb-8 rounded-lg scrollbar-hide">
          <div className="snap-center shrink-0 relative w-full h-64 sm:h-80 rounded-lg overflow-hidden">
            <Image 
              src="/avatars/limit1.jpg" 
              alt="Ilustrasi Limit 1" 
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="snap-center shrink-0 relative w-full h-64 sm:h-80 rounded-lg overflow-hidden">
            <Image 
              src="/avatars/limit2.jpg" 
              alt="Ilustrasi Limit 2" 
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="prose prose-invert text-base sm:text-lg text-slate-300">
          <p>
            Nah, limit itu digunakan dalam berbagai konsep matematika seperti Kalkulus, Analisis, dan yang lainnya.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between mt-12 pt-8 border-t border-slate-700 gap-4">
          <Link 
            href="/materi/math/12" 
            className="text-blue-400 hover:text-blue-500 transition-colors flex items-center"
          >
            &larr; Kembali ke Daftar Materi
          </Link>
          <Link 
            href="/materi/math/12/page-2" 
            className="text-blue-400 hover:text-blue-500 transition-colors flex items-center"
          >
            Materi Selanjutnya (Bagian 2) &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
