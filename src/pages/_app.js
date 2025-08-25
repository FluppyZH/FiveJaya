import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { useRouter } from 'next/router';
import { AuthProvider } from '@/context/AuthContext';
import { useState, useEffect } from 'react';        
import LoadingScreen from '@/components/LoadingScreen'; 

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-jakarta',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      <main className={`${jakarta.variable} font-sans`}>
        {loading ? (
          <LoadingScreen />
        ) : router.pathname.startsWith('/dashboard') ? (
          <Component {...pageProps} />
        ) : router.pathname === '/login' || router.pathname === '/register' ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </main>
    </AuthProvider>
  );
}