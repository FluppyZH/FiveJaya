import Link from 'next/link';
import Marquee from "react-fast-marquee";
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';

export default function Header() {
  const { isLoggedIn, loading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-slate-900/70 backdrop-blur-lg border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            E-LearnQU
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/materi/math" className="hover:text-blue-400 transition-colors">Materi</Link>
            <Link href="/tobk" className="hover:text-blue-400 transition-colors">Simulasi UTBK</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center">
              {!loading && (
                <Link 
                  href={isLoggedIn ? '/dashboard' : '/login'}
                  className="p-2 rounded-full hover:bg-slate-700 transition-colors"
                  aria-label="Akun Pengguna"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </Link>
              )}
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full hover:bg-slate-700 transition-colors" aria-label="Buka Menu">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <Link href="/materi/math" className="hover:text-blue-400 transition-colors">Materi</Link>
              <Link href="/tobk" className="hover:text-blue-400 transition-colors">Simulasi UTBK</Link>
            </nav>
          </div>
        )}
      </div>
      <div className="bg-blue-600 text-white text-sm font-semibold">
        <Marquee pauseOnHover={true} speed={50}>
            <span className="mx-16">Simulasi ToBK SNBT Subtes PM 2026 Terbaru Telah Dibuka!</span>
            <span className='mx-16'>E-LearnQU!! Tempatnya Matematika</span>
            <span className="mx-16">Bersama E-LearnQU!! Menuju Kampus Impian!.</span>
        </Marquee>
      </div>
    </header>
  );
}
