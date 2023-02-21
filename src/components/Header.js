import Image from 'next/image';

export default function Header() {
  return (
    <header className=" ">
      <div className=" ">
        {/* left */}

        <Image src="/images/airbnblogo.png" alt="logo" />
      </div>
      <div className="flex items-center rounded-full border-2 py-2 shadow">
        {/* middle */}
        <input type="text" />
      </div>
      <div>{/* right */}</div>
    </header>
  );
}
