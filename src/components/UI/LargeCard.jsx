import Image from 'next/image';
export default function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative cursor-pointer p-16">
      <div className="relative h-96 w-full">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          alt="largeCard"
          className="rounded-xl"
        />
      </div>
      <div
        className="absolute top-32 left-20
      "
      >
        <h3 className="mb-3 w-64 text-3xl font-semibold">{title}</h3>
        <p>{description}</p>
        <button className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white">
          {buttonText}
        </button>
      </div>
    </section>
  );
}
