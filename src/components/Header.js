import Link from 'next/link';
import Marquee from "react-fast-marquee";
import { useAuth } from '@/context/AuthContext';

export default function Header() {
  const { isLoggedIn, logout } = useAuth();

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
            {isLoggedIn ? (
              <>
                <Link 
                  href="/dashboard" 
                  className="font-semibold hover:text-blue-400 transition-colors">
                  Dashboard
                </Link>
                <button 
                  onClick={logout}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-lg transition-colors">
                  Keluar
                </button>
              </>
            ) : (
              <div className="md:hidden">
              </div>
            )}
          </div>
        </div>
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