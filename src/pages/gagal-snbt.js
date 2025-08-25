import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function GagalSnbtPage() {
  const post = {
    title: "Kenapa Siswa GAGAL SNBT?",
    imageUrl: "/avatars/gagal-snbt.jpg",
    content: `
      <p><strong>HALO SEMUA!</strong> Kali ini admin E-LearnQU! ingin membahas point utama kenapa banyak siswa gagal dalam menghadapi SNBT. 
      Semoga dengan ini kamu bisa lebih siap dan terhindar dari kesalahan yang sama.</p>

      <ol class="list-decimal list-inside space-y-4 mt-6">
        <li>Kurang persiapan dan menunda belajar</li>
        <li>Tidak memahami format dan pola soal SNBT</li>
        <li>Kurang latihan soal dan tryout SNBT</li>
        <li>Salah strategi saat mengerjakan soal SNBT</li>
        <li>Tidak memilih jurusan dan PTN dengan strategi yang tepat</li>
        <li>Mental lemah dan tidak percaya diri</li>
        <li>Mengabaikan kesehatan dan kurang istirahat sebelum ujian</li>
      </ol>

      <p class="mt-8"><em>Dari Team E-LearnQU, berharap kamu bisa belajar dari kesalahan umum ini. 
      Semangat untuk menjalani SNBT 2026 nanti ya!!! buktikan ke semua orang bahwa kamu bisa, kamu mampu dan kamu hebat.</em></p>
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
