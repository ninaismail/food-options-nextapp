import Image from 'next/image'
import Tabs from './about-tab'
function HeroSection() {
  return (
<div class="relative top-0 left-0 w-full bg-my-teal-500 px-10 py-12 text-my-beige-500">
    <div class="text-my-beige-500 block text-center flex justify-between items-center">
        <div>
            <Image src="/speech.png" width="40"height="40"alt="Speech"/> 
        </div>  
        <div>
            <h2 class="text-5xl font-bold mb-6">Enjoy the moment</h2>
            <p class=" mb-6 pb-2 lg:pb-0">
            Lorem ipsum dolor sit amet,</p>
        </div>
        <div></div>
    </div>
    <div class="grid lg:grid-cols-2 flex items-center mb-8">
       <div>
            <p class="text-left">Food Options was established in 2020 as a Saudi company that seeks to offer a unique 
            experience, pioneering in the food and beverage industry in the kingdom. 
            Food Options is entering the local and international market,
            creating more job opportunities achieving the Kingdom's Vision 2030.</p>
       </div>
        <div>
            <Image src="/chickenburger.jpg" width="597"height="537"alt="Chicken Burger" class="w-full shadow-lg"/>
       </div>
    </div>
    <Tabs />
</div>
  );
}

export default HeroSection;