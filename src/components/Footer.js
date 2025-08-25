import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-gray-400">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="md:col-span-1">
            <h2 className="text-white text-xl font-bold">E-LearnQU!</h2>
            <p className="mt-2 text-sm">
              Membantumu menaklukkan matematika dan meraih kampus impian.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider">Jelajahi</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/materi/math" className="hover:text-white transition-colors">Materi</Link></li>
              <li><Link href="/tobk" className="hover:text-white transition-colors">Simulasi UTBK</Link></li>
            </ul>
          </div>

            <div>
              <h3 className="text-white font-semibold uppercase tracking-wider">
                Admin E-LearnQU!
              </h3>
              <div className="flex flex-col mt-4 space-y-3">
                <a
                  href="https://instagram.com/chrvert_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Admin 1"
                  className="hover:text-white transition-colors flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07..."></path>
                  </svg>
                  <span>@chrvert_</span>
                </a>

                <a
                  href="https://instagram.com/mvfflinn_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Admin 2"
                  className="hover:text-white transition-colors flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07..."></path>
                  </svg>
                  <span>@mvfflinn_</span>
                </a>

                <a
                  href="https://instagram.com/dnawen.gir"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Admin 3"
                  className="hover:text-white transition-colors flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07..."></path>
                  </svg>
                  <span>@dnawen.gir</span>
                </a>
              </div>
            </div>


        </div>
      </div>
    </footer>
  );
}
