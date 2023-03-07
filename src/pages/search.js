import { useRouter } from 'next/router';
import { format } from 'date-fns';
export default function Search({ searchResults }) {
  console.log(searchResults);
  const router = useRouter();
  const { location, startDate, endDate, numOfGust } = router.query;
  const formateStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formateEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formateStartDate} - ${formateEndDate}`;
  return (
    <div>
      <main className="flex">
        <section className="">
          <p className="text-xs">
            300+ Stays for - {range} - for {numOfGust}
          </p>
          <h1 className="mb-5 mt-2 text-xl font-semibold">
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
