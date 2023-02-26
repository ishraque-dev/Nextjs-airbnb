import Link from 'next/link';

export default function HeaderDropDown({ items }) {
  return (
    <div className="h-auto w-[200px] rounded-lg bg-white  py-2 drop-shadow-md">
      <div className="border-b">
        <Link href="#">
          <h3 className=" cursor-pointer rounded-sm p-3 text-gray-700 hover:bg-[#F7F7F7] ">
            Sign Up
          </h3>
        </Link>
        <Link href="#">
          <h3 className="mb-3 cursor-pointer rounded-sm p-3 py-2 text-base text-gray-700 hover:bg-[#F7F7F7]">
            Login
          </h3>
        </Link>
      </div>
      <div className="mt-3">
        {items.map((item) => {
          console.log();
          return (
            <Link key={item.name} href={item.name}>
              <h3 className="cursor-pointer rounded-sm  p-3 py-2 text-gray-700 hover:bg-[#F7F7F7]">
                {item.name}
              </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
