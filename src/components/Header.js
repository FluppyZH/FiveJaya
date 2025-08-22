import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur-lg border-b border-slate-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          E-LearnQU
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#fitur" className="hover:text-blue-400 transition-colors">Fitur</Link>
          <Link href="#kelas" className="hover:text-blue-400 transition-colors">Kelas</Link>
          <Link href="#testimoni" className="hover:text-blue-400 transition-colors">Testimoni</Link>
        </nav>
        <Link 
          href="/register" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg transition-colors"
        >
          Daftar Gratis
        </Link>
      </div>
    </header>
  );
}