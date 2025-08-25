import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PeluangPage2() {
  return (
    <div className="bg-slate-900 text-white min-h-screen p-8">
      <Head>
        <title>Peluang: Persamaan dan Pertidaksamaan | Bagian 2</title>
      </Head>
      <div className="container mx-auto px-6 py-12">
        <Link href="/materi/math/11" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center mb-8">
          &larr; Kembali ke Materi Peluang Kelas 11
        </Link>
        <h1 className="text-4xl font-extrabold text-white mb-6">
          Peluang: DeFinisi, Rumus, dan Contoh
        </h1>

        <div className="prose prose-invert text-lg text-slate-300 mb-8">
          <p>
            Peluang suatu kejadian A dihitung dengan rumus P(A) = n(A) ÷ n(S), di mana n(A) adalah banyaknya titik sampel kejadian A, dan n(S) adalah jumlah seluruh titik sampel dalam ruang sampel. Sebagai contoh, peluang munculnya bilangan genap pada dadu enam sisi adalah P(A) = 3 ÷ 6 = 1/2. Rumus ini menjadi dasar utama yang selalu dipakai dalam menghitung berbagai jenis soal peluang.
          </p>

          <p>
            Nilai peluang selalu berada pada rentang 0 sampai 1. Jika peluang sebuah kejadian bernilai 0, artinya peristiwa tersebut mustahil terjadi. Sebaliknya, jika bernilai 1, maka peristiwa itu pasti terjadi. Semua peristiwa lain akan memiliki peluang antara 0 dan 1, tergantung banyaknya titik sampel yang mendukung peristiwa itu. Hal ini membantu kita memahami tingkat kepastian suatu kejadian.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image 
              src="/avatars/Peluang_3.png" 
              alt="Ilustrasi Persamaan Peluang" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image 
              src="/avatars/Peluang_4.png" 
              alt="Ilustrasi Pertidaksamaan Peluang" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
        </div>
        
        <div className="prose prose-invert text-lg text-slate-300">
          <p>
            Peluang bukan hanya ada di buku pelajaran, tetapi juga digunakan dalam kehidupan nyata. Contohnya, prakiraan cuaca menyebutkan 70% kemungkinan hujan, perusahaan asuransi menghitung risiko kecelakaan untuk menentukan premi, bahkan dalam permainan kartu atau undian kita menggunakan peluang untuk menilai kesempatan menang. Dengan menguasai konsep peluang dasar, kita bisa melatih logika, membuat prediksi lebih rasional, dan memahami bagaimana ketidakpastian bisa dianalisis secara matematis.
          </p>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-slate-700">
          <Link href="/materi/math/11/page-1" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center">
            &larr; Materi Sebelumnya (Bagian 1)
          </Link>
          <Link href="/materi/math/11/page-3" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center">
            Materi Selanjutnya (Video) &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}