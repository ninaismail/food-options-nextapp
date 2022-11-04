import Link from 'next/link';
import Image from 'next/image'
import {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';

function MainHeader() {
  const [showMe, setShowMe] = useState(true);
  function toggle(){
    setShowMe(!showMe);
  }
  return (
    <nav class="bg-my-beige-500 sm:px-4 fixed w-full z-20 top-0 left-0">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="#">
        <Image src="/Group-3.png" width="121" height="61" alt="Food Options Logo" />
    </a>
    <div class="flex md:order-2">
    <a href="#" class="block py-2 pr-4 pl-3 hover:text-zinc-500">Ar</a>
        <button data-collapse-toggle="navbar-sticky" type="button" 
        class="inline-flex items-center p-2 md:hidden 
        focus:outline-none" aria-controls="navbar-sticky" 
        aria-expanded="false"
        onClick={toggle}>
          <span class="sr-only">Open main menu</span>
          <GiHamburgerMenu />
        </button>
    </div>
    <div style={{
        display: showMe?"block":"none"
      }}
      class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" 
      id="navbar-sticky">
      <ul class="flex flex-col md:p-4 md:flex-row md:space-x-8
      md:font-medium">
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 hover:text-zinc-500">About Us</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 hover:text-zinc-500">Brands</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 hover:text-zinc-500">Contact Us</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  );
}

export default MainHeader;