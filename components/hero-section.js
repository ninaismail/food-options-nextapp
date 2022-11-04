import Link from 'next/link';
import Image from 'next/image'
import {BsArrowRight} from 'react-icons/bs'

function HeroSection() {
  return (
<div class="relative top-0 left-0 flex items-center justify-start lg:h-screen w-full">
  <div id="heroimg"class="relativ">
        <Image src="/heroimg.jpg" width="1920"height="1245"                          
        layout="responsive"objectFit="cover"alt="Food Options" />
  </div>
  <div class="absolute px-10 lg:px-24 z-10 text-left">
    <div class="mb-8">
        <h2 class="mt-3 sm:mt-5 sm:max-w-xl lg:text-5xl md:text-4xl text-3xl font-bold">
            Good food choices are good investments.
        </h2>
    </div>
    <div>
        <a href="#" class="xs:w-1/2 flex justify-center gaap-4 items-center sm:px-8 sm:py-3 
        shadow mt-2 font-medium text-my-beige-500 bg-my-teal-500 hover:bg-my-teal-700 
        focus:outline-none md:py-4 md:text-lg md:px-10">
            <div>Learn More</div>&nbsp;&nbsp;<div><BsArrowRight/></div>
        </a>
    </div>
    </div>
</div>
  );
}

export default HeroSection;