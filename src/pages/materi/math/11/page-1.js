import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PeluangPage1() {
  return (
    <div className="bg-slate-900 text-white min-h-screen p-8">
      <Head>
        <title>Peluang: Pengertian dan Sifat Dasar | Bagian 1</title>
      </Head>
      <div className="container mx-auto px-6 py-12">
        <Link href="/materi/math/11" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center mb-8">
          &larr; Kembali ke Materi Peluang Kelas 11
        </Link>
        <h1 className="text-4xl font-extrabold text-white mb-6">
          Peluang: Pengertian dan Sifat Dasar
        </h1>
        
        <div className="prose prose-invert text-lg text-slate-300 mb-8">
            <p>Peluang adalah cabang matematika yang mempelajari tentang kemungkinan munculnya suatu peristiwa. Konsep ini penting karena banyak kejadian sehari-hari bersifat acak, seperti pelemparan koin, undian, cuaca, hingga prediksi hasil pertandingan. Dengan mempelajari peluang, kita bisa memperkirakan seberapa besar kemungkinan suatu peristiwa terjadi, meskipun tidak bisa memastikan secara mutlak.</p>
            <p>Dasar utama dalam peluang adalah ruang sampel, yaitu himpunan semua hasil yang mungkin terjadi dari suatu percobaan. Misalnya, pada pelemparan sebuah koin, ruang sampelnya adalah angka, gambar. Pada pelemparan sebuah dadu enam sisi, ruang sampelnya adalah 1, 2, 3, 4, 5, 6. Memahami ruang sampel penting agar kita bisa menghitung peluang secara benar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image 
              src="/avatars/Peluang1.png" 
              alt="Peluang 1" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image 
              src="/avatars/Peluang2.png" 
              alt="Peluang 2" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="prose prose-invert text-lg text-slate-300">
          <p>Titik sampel adalah setiap elemen tunggal dari ruang sampel. Misalnya, pada dadu enam sisi, “3” adalah sebuah titik sampel. Ketika kita membicarakan suatu kejadian, kita sebenarnya merujuk pada kumpulan titik sampel tertentu. Contohnya, kejadian muncul bilangan genap pada pelemparan dadu memiliki titik sampel 2, 4, 6. Dengan kata lain, titik sampel adalah unit terkecil dalam ruang sampel.</p>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-slate-700">
          <Link href="/materi/math/11" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center">
            &larr; Kembali ke Daftar Materi
          </Link>
          <Link href="/materi/math/11/page-2" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center">
            Materi Selanjutnya (Bagian 2) &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}