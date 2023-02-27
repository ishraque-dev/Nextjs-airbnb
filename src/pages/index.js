import Banner from '@/components/Layout/Banner';
import Header from '@/components/Layout/Header';
import Head from 'next/head';
export default function Home({ exploreData }) {
  console.log(exploreData);
  return (
    <>
      <div>
        <Head>
          <title>Airbnb 2.0</title>
        </Head>
        {/* header */}
        <Header />
        {/* banner */}
        <Banner />
        {/* main section */}
        <main className="container mx-auto px-3 lg:px-0">
          <section className="pt-4">
            <h2 className="pb-3 text-xl font-semibold">Explore Nearby</h2>
          </section>
        </main>
      </div>
    </>
  );
}
export async function getStaticProps() {
  const exploreData = await fetch(`https://www.jsonkeeper.com/b/4G1G`).then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
    },
  };
}
