import Head from 'next/head';
import Link from 'next/link';

export default function LimitPage3() {
  return (
    <div className="bg-slate-900 text-white min-h-screen p-8">
      <Head>
        <title>Limit: Video Pembahasan | Bagian 3</title>
      </Head>
      <div className="container mx-auto px-6 py-12">
        <Link href="/materi/math/10" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center mb-8">
          &larr; Kembali ke Materi Limit Kelas 12
        </Link>
        <h1 className="text-4xl font-extrabold text-white mb-6">
          Video Pembahasan Limit
        </h1>

        <div className="prose prose-invert text-lg text-slate-300 mb-8">
          <p>
            Nah kita udah ada di akhir pembahasan nih guys, kira kira nih dari pembahasan limit sebelumnya, teman teman semua udah mulai paham ga sih? pastinya udah lah ya.
          </p>
          <p>
            Tenang aja buat teman teman semua yang masih belum paham tentang materi limit yang masih dasar, E-LearnQU! udah sediain video pembahasannya juga kok!! silahkan di tonton ya teman teman.
          </p>
        </div>

<div className="aspect-w-16 aspect-h-9 mb-8">
  <iframe 
    src="https://www.youtube.com/embed/8gT3UAWTlhE" 
    title="Video Pembahasan Limit" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen
    className="w-full h-full rounded-lg"
  ></iframe>
</div>

        <div className="prose prose-invert text-lg text-slate-300">
          <p>
            Gimana teman teman? video pembahasannya mudah di pahami kan? yuk lanjut ke ToBK YUKKKKK.
          </p>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-slate-700">
          <Link href="/materi/math/10/page-2" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center">
            &larr; Materi Sebelumnya (Bagian 2)
          </Link>
          <Link href="/materi/math/10" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center">
            Kembali ke Daftar Materi Limit
          </Link>
        </div>
      </div>
    </div>
  );
}