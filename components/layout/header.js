import Link from 'next/link';
import Image from 'next/image'
import {useState} from 'react';

function MainHeader() {
  const [isShown, setIsShown] = useState(true);

  const handleClick = event => {
    setIsShown(current => !current);
  };
  return (
    <nav class="bg-my-beige-500 px-2 sm:px-4 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="#">
        <Image src="/logo.png" width="74" height="73" alt="Food Options Logo" />
    </a>
    <div class="flex md:order-2">
    <a href="#" class="block py-2 pr-4 pl-3 hover:text-zinc-500">Ar</a>
        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul class="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0rgba(11,36,33,0.61)">
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:text-zinc-500">About Us</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:text-zinc-500">Brands</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:text-zinc-500">Contact Us</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  );
}

export default MainHeader;