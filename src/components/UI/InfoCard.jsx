import Image from 'next/image';
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';

export default function InfoCard({
  img,
  title,
  description,
  location,
  star,
  price,
  total,
}) {
  return (
    <div className="flex cursor-pointer border-b py-6 px-2 pr-3 transition duration-200 ease-out  hover:opacity-80 hover:shadow-lg ">
      <div className="relative h-28 w-36 flex-shrink-0 md:h-52 md:w-80">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-grow flex-col pl-5">
        <div className="mb-2 flex items-center justify-between lg:mb-5">
          <p className="text-xs lg:text-base">{location}</p>
          <AiOutlineHeart className="hidden cursor-pointer text-xl md:block" />
        </div>
        <h4 className="text-sm font-semibold md:text-base lg:text-xl ">
          {title}
        </h4>
        <div className="w-10 border-b pb-2" />
        <p className="hidden flex-grow pt-2 text-sm text-gray-500 md:inline-flex">
          {description}
        </p>
        <div className="flex items-center justify-between pt-2 md:items-end lg:mb-3 lg:pt-4">
          <p className="flex items-center">
            <AiOutlineStar className="text-red-400 lg:text-xl" />
            <span className="text-xs md:text-sm lg:text-base"> {star}</span>
          </p>
          <div>
            <p className="text-xs font-semibold lg:pb-2 lg:text-xl">{price}</p>
            <p className="hidden text-right text-sm font-extralight md:block">
              {total}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
