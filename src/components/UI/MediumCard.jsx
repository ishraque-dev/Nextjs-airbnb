import Image from 'next/image';
export default function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer  ">
      <div className="relative h-32 w-32 overflow-hidden lg:h-80 lg:w-80">
        <Image src={img} layout="fill" alt="cardImage" className="rounded-xl" />
      </div>
      <h3 className="mt-3 text-base md:text-2xl">{title}</h3>
    </div>
  );
}
