import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function CaraCepatMenghafalPage() {
  const post = {
    title: "Cara Cepat Menghafal Rumus Trigonometri",
    imageUrl: "/avatars/trigonometri.png",
    content: `
      <h2>Pengertian Trigonometri</h2>
      <p>Trigonometri adalah cabang matematika yang mempelajari hubungan antara sudut dan sisi-sisi segitiga. Konsep ini memiliki aplikasi luas, mulai dari fisika, arsitektur, hingga navigasi. Tiga fungsi dasar trigonometri adalah sinus (sin), cosinus (cos), dan tangen (tan).</p>
      <p>Meskipun terlihat menakutkan karena banyaknya rumus, ada trik mudah untuk menguasainya. Anda bisa menggunakan teknik mnemonic, seperti "SOH CAH TOA" untuk sin, cos, dan tan, serta memahami asal-usul rumus-rumus tersebut.</p>
    `,
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Head>
        <title>{post.title} | E-LearnQU</title>
      </Head>
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center">
            &larr; Kembali ke Beranda
          </Link>
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-4">
          {post.title}
        </h1>

        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8">
          <Image 
            src={post.imageUrl} 
            alt={post.title} 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg"
          />
        </div>

        <div className="prose prose-invert text-lg text-slate-300">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </div>
  );
}