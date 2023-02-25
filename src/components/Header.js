import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import { RiEarthFill } from 'react-icons/ri';
import { AiOutlineBars } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
export default function Header() {
  return (
    <header className="shadow">
      <div className="container flex items-center justify-between">
        <div className="w-[35%]">
          {/* left */}

          <Image
            src="/images/airbnblogo.png"
            alt="logo"
            width="100"
            height="100"
          />
        </div>
        <div className="border-black-400 flex w-[30%] items-center rounded-full border  px-3 py-1 ">
          {/* middle */}
          <input
            type="text"
            placeholder="Search"
            className=" w-full  outline-none"
          />
          <div className="rounded-full bg-[#FF385C] p-1">
            <FiSearch className="text-xl text-white" />
          </div>
        </div>
        <div className="flex w-[35%] items-center justify-end gap-3">
          <div className="">
            <h3 className="cursor-pointer p-2 font-medium text-gray-900 duration-200 ease-in-out hover:rounded-full hover:bg-[#F7F7F7]">
              Airbnb you home{' '}
            </h3>
          </div>
          <div className="cursor-pointer p-2   text-gray-900 duration-200 ease-in-out hover:rounded-full hover:bg-[#F7F7F7]">
            <RiEarthFill className="text-xl text-[#717171]" />
          </div>
          <div className=" flex cursor-pointer gap-x-1 rounded-full border border-[#ccc] p-2 hover:shadow-lg">
            <AiOutlineBars className="text-xl text-[#717171]" />
            <FaUserAlt className="text-xl text-[#717171]" />
          </div>
        </div>
      </div>
    </header>
  );
}
