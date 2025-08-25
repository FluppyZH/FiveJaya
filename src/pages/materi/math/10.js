import Head from 'next/head';
import Link from 'next/link';

const MateriPageCard = ({ title, description, href }) => (
  <Link href={href} className="block p-6 bg-slate-800 rounded-lg shadow-md border border-slate-700 hover:bg-slate-700 transition-colors transform hover:scale-105 duration-200">
    <h3 className="text-xl font-bold text-blue-400">{title}</h3>
    <p className="mt-2 text-slate-400">{description}</p>
  </Link>
);

export default function MateriKelas10Index() {
  const pages = [
    {
      title: "Pengertian dan Sifat Dasar",
      description: "Memahami definisi eksponen dan aturan-aturan penting dalam perhitungan.",
      href: "/materi/math/10/page-1"
    },
    {
      title: "Persamaan dan Pertidaksamaan",
      description: "Mempelajari cara menyelesaikan persamaan dan pertidaksamaan eksponen.",
      href: "/materi/math/10/page-2"
    },
    {
      title: "Video Pembahasan",
      description: "Melihat pembahasan materi dengan melalui video.",
      href: "/materi/math/10/page-3"
    },
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen p-8">
      <Head>
        <title>Materi Eksponen Kelas 10 | E-LearnQU</title>
      </Head>
      <div className="container mx-auto px-6 py-12">
        <Link href="/materi/math" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center mb-8">
          &larr; Kembali ke Pilihan Kelas
        </Link>
        <h1 className="text-4xl font-extrabold text-white mb-10 text-center">
          Materi Eksponen Kelas 10
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pages.map((page, index) => (
            <MateriPageCard key={index} {...page} />
          ))}
        </div>
      </div>
    </div>
  );
}