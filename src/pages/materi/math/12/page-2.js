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
        <Link href="/materi/math/10" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center mb-8">
          &larr; Kembali ke Materi Limit Kelas 10
        </Link>
        <h1 className="text-4xl font-extrabold text-white mb-6">
          Limit: Persamaan dan Pertidaksamaan
        </h1>

        <div className="prose prose-invert text-lg text-slate-300 mb-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus auctor mattis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image 
              src="/avatars/Limit_3.png" 
              alt="Ilustrasi Persamaan Limit" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image 
              src="/avatars/Limit_4.png" 
              alt="Ilustrasi Pertidaksamaan Limit" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
        </div>
        
        <div className="prose prose-invert text-lg text-slate-300">
          <p>
            Vivamus id enim. Morbi ac felis. Curabitur egestas sem at lectus. Sed at libero vitae nisl euismod pretium. Aliquam eu nunc. Suspendisse potenti. Morbi ac felis. Curabitur egestas sem at lectus. Sed at libero vitae nisl euismod pretium. Aliquam eu nunc. Suspendisse potenti. Fusce a quam. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.
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