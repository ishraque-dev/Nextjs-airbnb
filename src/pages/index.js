import Header from '@/components/Header';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Airbnb 2.0</title>
        </Head>
        {/* header */}
        <Header />
        {/* banner */}
      </div>
    </>
  );
}
