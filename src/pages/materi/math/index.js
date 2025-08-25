import Head from 'next/head';
import Link from 'next/link';

const ClassCard = ({ title, description, href, topic }) => (
  <Link href={href} className="block p-8 bg-slate-800 rounded-lg shadow-md border border-slate-700 hover:bg-slate-700 transition-colors transform hover:scale-105 duration-200 text-center">
    <h3 className="text-4xl font-extrabold text-blue-400">{title}</h3>
    <p className="mt-2 text-2xl font-bold text-white">{topic}</p>
    <p className="mt-4 text-slate-400">{description}</p>
  </Link>
);

export default function MathMateriIndexPage() {
  const materiData = [
    {
      title: "Kelas 10",
      topic: "Eksponen",
      description: "Pahami kembali konsep dasar eksponen dan sifat-sifatnya.",
      href: "/materi/math/10"
    },
    {
      title: "Kelas 11",
      topic: "Peluang",
      description: "Pembahasan singkat mengenai materi Peluang pada kelas 11 demi menguasai materi.",
      href: "/materi/math/11"
    },
    {
      title: "Kelas 12",
      topic: "Limit",
      description: "Kuasai konsep Limit demi menguasai dan pahami tentang materi tersebut.",
      href: "/materi/math/12"
    },
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen p-8">
      <Head>
        <title>Materi Matematika | E-LearnQU</title>
      </Head>
      <div className="container mx-auto px-6 py-12">
        <Link href="/" className="text-blue-400 hover:text-blue-500 transition-colors flex items-center mb-8">
          &larr; Kembali ke Beranda
        </Link>
        <h1 className="text-4xl font-extrabold text-white mb-10 text-center">
          Pilih Kelas untuk Pembahasan Materi
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {materiData.map((materi, index) => (
            <ClassCard key={index} {...materi} />
          ))}
        </div>
      </div>
    </div>
  );
}