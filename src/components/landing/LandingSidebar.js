import Link from 'next/link';

export default function LandingSidebar() {
  const popularPosts = [
    { title: "5 Kesalahan Umum saat Mengerjakan Soal Limit", href: "/materi/limit/kesalahan-umum" },
    { title: "Cara Cepat Menghafal Rumus Trigonometri", href: "/materi/trigonometri/cara-cepat-menghafal" },
    { title: "Simulasi UTBK 2026 Gratis!", href: "/tobk" },
    { title: "Mengapa saya gagal snbt?", href: "/gagal-snbt" },
  ];

  return (
    <aside className="w-full lg:w-1/3">
      <div className="sticky top-28 p-6 bg-slate-800 rounded-lg border border-slate-700">
        <h3 className="text-xl font-bold text-white border-b border-slate-600 pb-3 mb-4">
          Materi Terpopuler
        </h3>
        <ul className="space-y-4">
          {popularPosts.map((post, index) => (
            <li key={index}>
              <Link href={post.href} className="font-semibold hover:text-blue-400 transition-colors">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}