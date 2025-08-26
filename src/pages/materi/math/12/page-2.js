import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function LimitPage2() {
  return (
    <div className="bg-slate-900 text-white min-h-screen p-8">
      <Head>
        <title>Limit: Persamaan dan Pertidaksamaan | Bagian 2</title>
      </Head>

      <div className="container mx-auto px-6 py-12">
        <Link 
          href="/materi/math/12" 
          className="text-blue-400 hover:text-blue-500 transition-colors flex items-center mb-8"
        >
          &larr; Kembali ke Materi Limit Kelas 12
        </Link>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
          Persamaan dan Kombinasi Limit
        </h1>

        <div className="prose prose-invert text-base sm:text-lg text-slate-300 mb-8">
          <p>
            Persamaan limit adalah aturan-aturan yang digunakan untuk menghitung limit dari suatu fungsi 
            yang melibatkan operasi matematika seperti penjumlahan, pengurangan, perkalian, dan pembagian.
          </p>
          <p>
            Kombinasi limit adalah aturan-aturan yang digunakan untuk menghitung limit dari suatu fungsi 
            yang melibatkan komposisi fungsi, pangkat, dan lainnya.
          </p>
        </div>

        {/* Foto tunggal */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image 
            src="/avatars/limit3.jpg" 
            alt="Ilustrasi Persamaan dan Kombinasi Limit" 
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        
        <div className="prose prose-invert text-base sm:text-lg text-slate-300">
          <p>
            Nah, dengan demikian, persamaan dan kombinasi limit merupakan alat yang penting dalam kalkulus 
            untuk memecahkan masalah yang melibatkan limit.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between mt-12 pt-8 border-t border-slate-700 gap-4">
          <Link 
            href="/materi/math/12/page-1" 
            className="text-blue-400 hover:text-blue-500 transition-colors flex items-center"
          >
            &larr; Materi Sebelumnya (Bagian 1)
          </Link>
          <Link 
            href="/materi/math/12/page-3" 
            className="text-blue-400 hover:text-blue-500 transition-colors flex items-center"
          >
            Materi Selanjutnya (Video) &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
