import Image from 'next/image';
import { useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { RiEarthFill } from 'react-icons/ri';
import { AiOutlineBars } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import HeaderDropDown from '../UI/HeaderDropDown';
import useCloseDropdown from '@/hooks/useCloseDropdown';
export default function Header() {
  const fakeItems = [
    { name: 'Airbnb you home' },
    { name: 'Host an experience' },
    { name: 'Help' },
  ];

  const dropdownRef = useRef();
  const [open, setOpen] = useCloseDropdown(dropdownRef);
  return (
    <header className="px-3 py-3 shadow md:px-0 lg:py-1">
      <div className="container flex items-center justify-between">
        <div className="mr-2 w-[35%]">
          {/* left */}

          <Image
            src="/images/airbnblogo.png"
            alt="logo"
            width="100"
            height="100"
          />
        </div>
        <div className="border-black-400 flex w-[100%] items-center rounded-full border px-3  py-1 md:w-[50%] ">
          {/* middle */}
          <input
            type="text"
            placeholder="Search"
            className=" w-full  outline-none"
          />
          <div className="rounded-full bg-[#FF385C] p-1">
            <FiSearch className="text-white md:text-xl" />
          </div>
        </div>
        <div className="flex w-[35%] items-center justify-end md:gap-3">
          <div className="hidden md:block">
            <h3 className="cursor-pointer p-2 font-medium text-gray-700 duration-200 ease-in-out hover:rounded-full hover:bg-[#F7F7F7]">
              Airbnb you home{' '}
            </h3>
          </div>
          <div className="cursor-pointer p-2   text-gray-700 duration-200 ease-in-out hover:rounded-full hover:bg-[#F7F7F7]">
            <RiEarthFill className="text-xl text-[#717171]" />
          </div>
          <div
            ref={dropdownRef}
            onClick={() => {
              setOpen(!open);
            }}
            className=" flex cursor-pointer gap-x-1 rounded-full border border-[#ccc] p-2 hover:shadow-lg"
          >
            <AiOutlineBars className="text-[#717171] md:text-xl" />
            <FaUserAlt className="text-[#717171] md:text-xl" />
          </div>
          {open && (
            <div className="absolute top-14">
              <HeaderDropDown items={fakeItems} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
