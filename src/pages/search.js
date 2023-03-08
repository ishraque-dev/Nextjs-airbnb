import { useRouter } from 'next/router';
import { format } from 'date-fns';
import InfoCard from '@/components/UI/InfoCard';
export default function Search({ searchResults }) {
  console.log(searchResults);
  const router = useRouter();
  const { location, startDate, endDate, numOfGust } = router.query;
  const formateStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formateEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formateStartDate} - ${formateEndDate}`;
  return (
    <div>
      <main className="flex p-3">
        <section className="">
          <p className="text-xs text-gray-500">
            300+ Stays for - {range} - for {numOfGust}
          </p>
          <h1 className="mb:2 mt-2 text-xl font-semibold lg:mb-5">
            Stays in{' '}
            {location
              .split(' ')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')}
          </h1>
          <div className="hidden lg:inline-flex">
            <p className="button">Cancelation Flexibility</p>
            <p className="button">Type of Price</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map((item) => (
              <InfoCard
                img={item.img}
                location={item.location}
                key={item.title}
                title={item.title}
                description={item.description}
                price={item.price}
                total={item.total}
                star={item.star}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
export async function getServerSideProps() {
  const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
