import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-extrabold text-white">Siap Menjadi Juara Selanjutnya?</h2>
        <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
          Jangan tunda lagi. Bergabunglah dengan ribuan siswa lainnya dan mulailah perjalananmu menuju kampus impian bersama E-LearnQU.
        </p>
        <Link 
          href="/register" 
          className="mt-8 inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-gray-200 transition-transform hover:scale-105"
        >
          Daftar Sekarang
        </Link>
      </div>
    </section>
  );
}