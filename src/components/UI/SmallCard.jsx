import Image from 'next/image';
export default function SmallCard({ img, location, distance }) {
  return (
    <div className="m-2 mt-4 flex transform cursor-pointer items-center space-x-3 rounded-xl transition duration-200 hover:scale-105 hover:bg-gray-100">
      <div className="relative h-16 w-16 ease-out ">
        <Image src={img} layout="fill" className="rounded-lg" alt="small" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-400">{distance}</h3>
      </div>
    </div>
  );
}
