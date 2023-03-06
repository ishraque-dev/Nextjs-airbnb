import Image from 'next/image';
import { useRef, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FiSearch } from 'react-icons/fi';
import { RiEarthFill } from 'react-icons/ri';
import { AiOutlineBars } from 'react-icons/ai';
import { FaUserAlt, FaUserFriends } from 'react-icons/fa';
import HeaderDropDown from '../UI/HeaderDropDown';
import useCloseDropdown from '@/hooks/useCloseDropdown';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
export default function Header() {
  const fakeItems = [
    { name: 'Airbnb you home' },
    { name: 'Host an experience' },
    { name: 'Help' },
  ];

  const dropdownRef = useRef();
  const [open, setOpen] = useCloseDropdown(dropdownRef);
  const [numOfGust, setNubOfGust] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    keys: 'selection',
  };
  const handleSelect = (ranges) => {
    const {
      range1: { startDate },
    } = ranges;
    console.log(startDate);
    const {
      range1: { endDate },
    } = ranges;
    setStartDate(startDate);
    setEndDate(endDate);
  };
  return (
    <header className="sticky top-0  z-50  bg-white  px-3  py-3 shadow backdrop-blur md:px-2 lg:py-1 ">
      <div className="container flex items-center justify-between">
        <div className="mr-2 w-[40%]">
          {/* left */}

          <Image
            src="/images/airbnblogo.png"
            alt="logo"
            width="130"
            height="130"
            className=""
          />
        </div>
        <div className="border-black-400 flex w-[100%] items-center rounded-full border px-3  py-1 md:w-[40%] ">
          {/* middle */}
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder="Search"
            className=" w-full  outline-none"
          />
          <div className="rounded-full bg-[#FF385C] p-[1px] md:p-1">
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
            <AiOutlineBars className="text-sm text-[#717171] md:text-xl" />
            <FaUserAlt className="text-sm text-[#717171] md:text-xl" />
          </div>
          {open && (
            <div className="absolute top-14">
              <HeaderDropDown items={fakeItems} />
            </div>
          )}
        </div>
      </div>
      <TransitionGroup component={null}>
        {searchInput && (
          <CSSTransition classNames="dialog" timeout={300}>
            <>
              <div className="ml-auto text-center">
                <DateRangePicker
                  ranges={[selectionRange]}
                  minDate={new Date()}
                  rangeColors={['#FF385C']}
                  onChange={handleSelect}
                  className="flex  flex-col md:flex-row"
                />
                <div className="mx-auto mb-3 flex w-[50%] items-center justify-between border-b">
                  <h3 className="text-base font-semibold md:text-xl lg:text-2xl ">
                    Number of Gusts:
                  </h3>
                  <div
                    className="gap3 flex
                    items-center
                  "
                  >
                    <FaUserFriends className="md:text-xl" />
                    <input
                      type="number"
                      className="w-12 pl-2 text-red-400 outline-none lg:text-lg"
                      value={numOfGust}
                      onChange={(e) => setNubOfGust(e.target.value)}
                      min={1}
                      max={6}
                    />
                  </div>
                </div>
                <div className="flex">
                  <button
                    className="flex-grow font-semibold text-red-400"
                    onClick={() => setSearchInput('')}
                  >
                    Cancel
                  </button>
                  <button className="flex-grow font-semibold">Search</button>
                </div>
              </div>
            </>
          </CSSTransition>
        )}
      </TransitionGroup>
    </header>
  );
}
