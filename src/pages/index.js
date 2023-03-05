import Banner from '@/components/Layout/Banner';
import Header from '@/components/Layout/Header';
import MediumCard from '@/components/UI/MediumCard';
import SmallCard from '@/components/UI/SmallCard';
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import LargeCard from '@/components/UI/LargeCard';
import Footer from '@/components/Layout/Footer';
export default function Home({ exploreData, cardsData }) {
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
        <main className="container mx-auto px-3 lg:px-2">
          <section className="pt-4">
            <h2 className="pb-3 text-xl font-semibold">Explore Nearby</h2>
            <div className="xl:grid-col-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {exploreData.map((item) => (
                <SmallCard
                  key={item.location}
                  img={item.img}
                  location={item.location}
                  distance={item.distance}
                />
              ))}
            </div>
          </section>
          <section>
            <h2 className="p-5 text-3xl font-semibold">Live Anywhere</h2>
            <Swiper slidesPerView={3} className="flex " spaceBetween={10}>
              {cardsData?.map((item) => (
                <SwiperSlide key={item.title}>
                  <MediumCard img={item.img} title={item.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlist created by airbnb"
            buttonText="Get Inspired"
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
export async function getStaticProps() {
  const exploreData = await fetch(`https://www.jsonkeeper.com/b/4G1G`).then(
    (res) => res.json()
  );
  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
