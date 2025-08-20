import Link from 'next/link';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>E-LearnQU!!!</title>
      </Head>
      <main>
        <section className="container mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-text-primary tracking-tight">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
          </h1>
        </section>
      </main>
    </>
  );
}