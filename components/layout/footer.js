import Link from 'next/link';
import Image from 'next/image'
import {AiOutlineInstagram,AiFillYoutube,AiFillLinkedin} from 'react-icons/ai'
import {HiOutlineMailOpen,HiLocationMarker} from 'react-icons/hi';
function Footer() {
    return ( 
    <footer className="p-4 bg-my-beige-500 sm:py-6 sm:px-12">
    <div className="md:flex md:justify-between mb-6">
        <div className="p-4">
            <Image src="/logo.png" width="200" height="200" alt="Food Options Logo" />
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <a href="#" className="text-gray-500 hover:text-gray-900">
                    <AiOutlineInstagram color="white"fontSize="1.2em" />
                    <span className="sr-only">Instagram page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-90">
                    <AiFillYoutube color="white"fontSize="1.2em" />
                    <span className="sr-only">Youtube page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-90">
                    <AiFillLinkedin color="white"fontSize="1.2em" />
                    <span className="sr-only">Linkedin page</span>
                </a>
           </div>
        </div>
        <div className="grid grid-cols-2 sm:gap-10 sm:w-8/12 sm:grid-cols-3">
            <div>
                <ul className="text-gray-600">
                    <li class="text-center text-white bg-my-teal-500 hover:bg-my-teal-700 font-bold py-2 px-4 w-full">
                        <a href="https://flowbite.com/">About Us</a>
                    </li>
                    <li class="text-center text-white bg-my-teal-500 hover:bg-my-teal-700 font-bold py-2 px-4 w-full my-2">
                        <a href="https://tailwindcss.com/">Our Brands</a>
                    </li>
                    <li class="text-center text-white bg-my-teal-500 hover:bg-my-teal-700 font-bold py-2 px-4 w-full">
                        <a href="https://tailwindcss.com/">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="text-white">
                    <li className="mb-4 flex items-center justify-start">
                    <HiOutlineMailOpen fontSize="1.2em"/>
                        <a href="https://discord.gg/4eeurUVvTy">nfo@foodoptions.com</a>
                    </li>
                    <li className="mb-4 flex items-center justify-start">
                    <HiLocationMarker fontSize="1.2em"/>
                        <a href="https://discord.gg/4eeurUVvTy">lorem ipsum</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900">Subscribe to our newsletter</h2>
                <ul className="text-gray-600 h-full">
                    <li>
                        <input className="mb-6 w-full" type="text" id='newsletterreg' name="wdform_2_element7" value="" title="Email" placeholder="Email" onchange="wd_check_email('2', '7', 'This is not a valid email address.')"/>
                   </li>
                   <li class="text-center text-white bg-my-teal-500 hover:bg-my-teal-700 font-bold py-2 px-4">
                        <button type="button" onClick=''><span class="fm-submit-loading spinner fm-ico-spinner"></span>Subscribe now</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className="text-center text-white">
        <span>© 2022<a href="https://flowbite.com/">Flowbite™</a>
        . All Rights Reserved.
        </span>
    </div>
</footer>
    );
  }
  
  export default Footer;

