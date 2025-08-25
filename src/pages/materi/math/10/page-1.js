import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function EksponenPage1() {
  return (
    <div className="bg-slate-900 text-white min-h-screen p-8">
      <Head>
        <title>Eksponen: Pengertian dan Sifat Dasar | Bagian 1</title>
      </Head>
      <div className="container mx-auto px-6 py-12">
        <Link href="/materi/math/10" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center mb-8">
          &larr; Kembali ke Materi Eksponen Kelas 10
        </Link>
        <h1 className="text-4xl font-extrabold text-white mb-6">
          Eksponen: Pengertian dan Sifat Dasar
        </h1>
        
        <div className="prose prose-invert text-lg text-slate-300 mb-8">
        <p>
  Eksponen atau bilangan berpangkat adalah cara sederhana untuk menulis perkalian berulang dari sebuah bilangan. Dalam bentuknya, ada dua komponen utama: basis dan pangkat. Basis adalah bilangan yang dikalikan, dan pangkat adalah angka yang menunjukkan berapa kali basis tersebut harus dikalikan dengan dirinya sendiri. Sebagai contoh, jika Anda melihat "dua pangkat tiga," itu berarti dua dikalikan dengan dirinya sendiri sebanyak tiga kali, yaitu 2 x 2 x 2.
        </p>
<p>
  Sifat-sifat dasar ini adalah aturan yang memudahkan perhitungan dengan eksponen. Saat mengalikan dua bilangan yang basisnya sama, Anda cukup menjumlahkan pangkatnya. Sebaliknya, saat membaginya, Anda mengurangi pangkatnya. Jika suatu bilangan berpangkat dipangkatkan lagi, pangkatnya dikalikan. Setiap bilangan yang tidak sama dengan nol jika dipangkatkan dengan nol, hasilnya selalu satu. Pangkat negatif menunjukkan kebalikan dari bilangan tersebut. Terakhir, jika ada perkalian atau pembagian dalam kurung yang dipangkatkan, pangkat tersebut berlaku untuk setiap bilangan di dalam kurung.
</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image 
              src="/avatars/eksponen1.jpg" 
              alt="Ilustrasi Eksponen 1" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image 
              src="/avatars/eksponen2.jpg" 
              alt="Ilustrasi Eksponen 2" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="prose prose-invert text-lg text-slate-300">
<p>
Selain sifat-sifat dasar tersebut, eksponen juga dapat diaplikasikan dalam bentuk akar. Bentuk akar adalah kebalikan dari eksponen. Sebagai contoh, akar kuadrat dari suatu bilangan dapat ditulis sebagai bilangan tersebut berpangkat setengah. Aturan ini sangat penting untuk menyelesaikan berbagai persamaan matematika yang melibatkan akar dan pangkat, dan menjadi jembatan antara dua konsep yang saling berhubungan erat dalam aljabar.
</p>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-slate-700">
          <Link href="/materi/math/10" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center">
            &larr; Kembali ke Daftar Materi
          </Link>
          <Link href="/materi/math/10/page-2" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center">
            Materi Selanjutnya (Bagian 2) &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}