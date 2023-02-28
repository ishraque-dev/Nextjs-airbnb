import Image from 'next/image';
export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] ">
      <Image
        src="/images/banner.jpg"
        alt="banner"
        fill
        objectFit="cover"
        className=""
      />
      <div className="absolute top-1/2 w-full text-center">
        <div>
          <p className="inline-block rounded-full text-white shadow-lg">
            Not sure where to go? Perfect.
          </p>
        </div>
        <button className="my-3 rounded-full bg-white px-6 py-2 font-bold text-[#FF385C] shadow-md transition duration-150 hover:shadow-xl active:scale-90 ">
          Take me
        </button>
      </div>
    </div>
  );
}
