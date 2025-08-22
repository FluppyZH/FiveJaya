import Link from 'next/link';

export default function Header() {
  return (
<<<<<<< HEAD
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
=======
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold text-text-primary">
          ProudToBeFivers<span className="text-primary">.</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/#fitur" className="text-text-secondary hover:text-primary font-medium transition">Fitur</Link>
          <Link href="#" className="text-text-secondary hover:text-primary font-medium transition">Materi</Link>
        </nav>
        <Link href="/login" className="px-5 py-2 bg-primary/20 text-primary font-semibold text-sm rounded-lg hover:bg-primary/30 transition shadow-glow-primary hover:shadow-glow-primary-hover">
          Masuk
>>>>>>> b1ba667e75dfe2313f37c7fd8143d0ea6362ad3f
        </Link>
      </div>
    </header>
  );
}