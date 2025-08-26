import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function EksponenPage2() {
  return (
    <div className="bg-slate-900 text-white min-h-screen p-8">
      <Head>
        <title>Eksponen: Persamaan dan Pertidaksamaan | Bagian 2</title>
      </Head>
      <div className="container mx-auto px-6 py-12">
        <Link href="/materi/math/10" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center mb-8">
          &larr; Kembali ke Materi Eksponen Kelas 10
        </Link>
        <h1 className="text-4xl font-extrabold text-white mb-6">
          Eksponen: Persamaan dan Pertidaksamaan
        </h1>

        <div className="prose prose-invert text-lg text-slate-300 mb-8">
<p> Eksponen atau bilangan berpangkat adalah konsep dasar dalam matematika yang digunakan untuk menunjukkan perkalian berulang. Ketika kita berbicara tentang persamaan eksponen, kita berhadapan dengan kalimat matematika yang memuat eksponen di mana pangkatnya mengandung variabel dan dihubungkan dengan tanda sama dengan. Tujuan utama dalam menyelesaikan persamaan ini adalah menemukan nilai variabel yang membuat persamaan menjadi benar. Prinsip dasar yang digunakan adalah menyamakan basis pada kedua sisi persamaan. Jika basisnya sudah sama, maka kita bisa langsung menyamakan pangkatnya. Misalnya, jika dua pangkat x sama dengan dua pangkat lima, maka kita dapat menyimpulkan bahwa x sama dengan lima. </p>
<p> Sementara itu, pertidaksamaan eksponen adalah kalimat matematika yang memuat eksponen dengan variabel pada pangkatnya, namun dihubungkan dengan tanda ketidaksamaan seperti lebih dari, kurang dari, lebih dari atau sama dengan, atau kurang dari atau sama dengan. Menyelesaikan pertidaksamaan ini sedikit lebih kompleks karena kita harus memperhatikan nilai basisnya. Jika basisnya lebih dari satu misalnya dua, lima, sepuluh, arah tanda ketidaksamaan pangkatnya akan sama dengan tanda ketidaksamaan semula. Namun, jika basisnya berada di antara nol dan satu misalnya setengah, nol koma satu, arah tanda ketidaksamaan pangkatnya harus dibalik. </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image 
              src="/avatars/persamaan.png" 
              alt="Ilustrasi Persamaan Eksponen" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image 
              src="/avatars/tidaksama.png" 
              alt="Ilustrasi Pertidaksamaan Eksponen" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
        </div>
        
        <div className="prose prose-invert text-lg text-slate-300">
<p>
Baik persamaan maupun pertidaksamaan eksponen memiliki aplikasi luas dalam berbagai bidang, mulai dari sains hingga keuangan. Dalam ilmu biologi, model pertumbuhan populasi sering menggunakan persamaan eksponen. Di bidang keuangan, perhitungan bunga majemuk juga didasarkan pada konsep ini. Memahami cara menyelesaikan kedua jenis masalah ini tidak hanya membantu dalam pelajaran matematika, tetapi juga memberikan landasan yang kuat untuk memecahkan masalah praktis di dunia nyata. Oleh karena itu, menguasai konsep eksponen adalah langkah penting dalam membangun kemampuan analisis matematika yang solid.
</p>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-slate-700">
          <Link href="/materi/math/10/page-1" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center">
            &larr; Materi Sebelumnya (Bagian 1)
          </Link>
          <Link href="/materi/math/10/page-3" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center">
            Materi Selanjutnya (Video) &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
