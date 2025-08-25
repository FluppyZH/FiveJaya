import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { serialize } from 'cookie';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        const serialized = serialize('authToken', result.token, {
          httpOnly: false, 
          secure: process.env.NODE_ENV !== 'development',
          sameSite: 'strict',
          maxAge: 3600, 
          path: '/',
        });

        document.cookie = serialized;
        router.push('/dashboard');
        
      } else {
        setError(result.message || 'Login gagal. Periksa email dan password Anda.');
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Login API call failed:", err);
      setError('Terjadi kesalahan koneksi. Silakan coba lagi.');
      setIsLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Login - E-LearnQU</title>
      </Head>
      <div className="min-h-screen lg:grid lg:grid-cols-5 bg-white dark:bg-slate-900">
        <div className="flex flex-col justify-center items-center p-6 sm:p-12 lg:p-16 lg:col-span-2">
            <div className="w-full max-w-sm">
                <Link href="/" className="text-2xl font-extrabold text-gray-900 dark:text-white">
                    E-LearnQU<span className="text-blue-600">.</span>
                </Link>
                
                <h1 className="mt-8 text-3xl font-bold text-gray-900 dark:text-white">Selamat Datang Kembali</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Belum punya akun? <Link href="/register" className="font-semibold text-blue-600 hover:underline">Daftar gratis</Link>
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Alamat Email</label>
                        <div className="mt-1">
                            <input 
                                id="email" 
                                name="email" 
                                type="email" 
                                autoComplete="email" 
                                required 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 transition duration-200" 
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                        </div>
                        <div className="mt-1">
                            <input 
                                id="password" 
                                name="password" 
                                type="password" 
                                autoComplete="current-password" 
                                required 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 transition duration-200" 
                            />
                        </div>
                    </div>
                    <div>
                        <button type="submit" disabled={isLoading} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95 disabled:bg-blue-400 disabled:scale-100">
                            {isLoading ? 'Memproses...' : 'Masuk'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div className="hidden lg:block lg:col-span-3">
             <div className="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <div className="w-3-4 text-center">
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">"Pendidikan adalah senjata paling ampuh yang bisa kamu gunakan untuk mengubah dunia."</p>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">- Nelson Mandela</p>
                </div>
             </div>
        </div>
      </div>
    </>
  );
}