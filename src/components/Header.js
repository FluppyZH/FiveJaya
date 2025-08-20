import Link from 'next/link';

export default function Header() {
  return (
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
        </Link>
      </div>
    </header>
  );
}