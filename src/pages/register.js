import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      setSuccess('Registrasi berhasil! Anda akan diarahkan ke halaman login...');
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } else {
      setError(result.message);
      setIsLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Register - E-LearnQU</title>
      </Head>
      <div className="min-h-screen lg:grid lg:grid-cols-5 bg-white dark:bg-slate-900">
        <div className="flex flex-col justify-center items-center p-6 sm:p-12 lg:p-16 lg:col-span-2">
            <div className="w-full max-w-sm">
                <Link href="/" className="text-2xl font-extrabold text-gray-900 dark:text-white">
                    E-LearnQU<span className="text-blue-600">.</span>
                </Link>
                
                <h1 className="mt-8 text-3xl font-bold text-gray-900 dark:text-white">Buat Akun Baru</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Sudah punya akun? <Link href="/login" className="font-semibold text-blue-600 hover:underline">Masuk di sini</Link>
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    {success && <p className="text-green-500 text-sm text-center">{success}</p>}
                    <div>
                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nama Lengkap</label>
                        <div className="mt-1">
                            <input id="fullname" name="fullname" type="text" autoComplete="name" required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 transition duration-200" />
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Alamat Email</label>
                        <div className="mt-1">
                            <input id="email" name="email" type="email" autoComplete="email" required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 transition duration-200" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                        <div className="mt-1">
                            <input id="password" name="password" type="password" autoComplete="new-password" required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 transition duration-200" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" disabled={isLoading || success} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95 disabled:bg-blue-400 disabled:scale-100">
                            {isLoading ? 'Memproses...' : 'Daftar Akun'}
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div className="hidden lg:block lg:col-span-3">
             <div className="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <div className="w-3/4 text-center">
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">"Investasi dalam pengetahuan selalu membayar bunga terbaik."</p>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">- Benjamin Franklin</p>
                </div>
             </div>
        </div>
      </div>
    </>
  );
}