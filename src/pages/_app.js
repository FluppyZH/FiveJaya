import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-jakarta',
});

export default function App({ Component, pageProps }) {
  
  const isAuthPage = Component.name === 'LoginPage' || Component.name === 'RegisterPage';

  return (
    <main className={`${jakarta.variable} font-sans bg-background`}>
      {isAuthPage ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </main>
  );
}