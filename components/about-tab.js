import Image from 'next/image'
import { useState } from "react";

function AboutTab() {
  const [openTab, setOpenTab] = useState(1);

  return (
<div class="w-full bg-my-teal-500 bg-my-beige-500 px-10 py-12 text-black">
<ul class="flex flex-wrap justify-between items-center
 list-none border-b-0 pl-0 mb-4 w-full" id="tabs-tab"
  role="tablist">
  <li role="presentation"class="md:w-1/4 w-1/2">
    <a href="#tabs-tabContent" class="flex flex-col items-between justify-evenly 
      tab-link
      block
      font-medium
      text-xs
      opacity-25 hover:opacity-100 active:opacity-100 visited:opacity-100
      " id="tabs-message-tab" data-bs-toggle="pill" data-bs-target="#tabs-message" 
      role="tab" aria-controls="tabs-message"
      aria-selected="true"
      onClick={() => setOpenTab(1)}>
        <Image src="/1.png" width="50" height="50" alt="Message" class="mx-auto mb-15"/>
        <div class="text-center">Message</div>
    </a>
  </li>
  <li role="presentation"class="md:w-1/4 w-1/2">
    <a href="#tabs-tabContent" class="flex flex-col items-between justify-evenly
      tab-link
      block
      font-medium
      text-xs
      opacity-25 hover:opacity-100 active:opacity-100 visited:opacity-100
     " id="tabs-vision-tab" data-bs-toggle="pill" data-bs-target="#tabs-vision" role="tab"
      aria-controls="tabs-vision" aria-selected="false"
      onClick={() => setOpenTab(2)}>
        <Image src="/2.png" width="50" height="50" alt="Vision" class="mx-auto mb-15"/>
        <div class="text-center">Vision</div>
    </a>
  </li>  
  <li role="presentation"class="md:w-1/4 w-1/2">
    <a href="#tabs-tabContent" class="flex flex-col items-between justify-evenly
      tab-link
      block
      font-medium
      text-xs
      opacity-25 hover:opacity-100 active:opacity-100 visited:opacity-100
     " id="tabs-goals-tab" data-bs-toggle="pill" data-bs-target="#tabs-goals" role="tab"
      aria-controls="tabs-goals" aria-selected="false"
      onClick={() => setOpenTab(3)}>
        <Image src="/3.png" width="50" height="50" alt="Goals" class="mx-auto mb-15"/>      
        <div class="text-center">Goals</div>  
    </a>
  </li>
  <li role="presentation"class="md:w-1/4 w-1/2">
    <a href="#tabs-tabContent" class="flex flex-col items-between justify-evenly
      tab-link
      block
      font-medium
      text-xsvisited
      opacity-25 hover:opacity-100 active:opacity-100 visited:opacity-100
     " id="tabs-scope-tab" data-bs-toggle="pill" data-bs-target="#tabs-scope" role="tab"
      aria-controls="tabs-scope" aria-selected="false"
      onClick={() => setOpenTab(4)}>
        <Image src="/4.png" width="50" height="50" alt="Scope of Work" class="mx-auto mb-15"/>
        <div class="text-center">Scope of Work</div>
    </a>
  </li>
</ul>
<div class="tab-content h-10" id="tabs-tabContent">
  <div className={openTab === 1 ? "block" : "hidden"} id="tabs-message" role="tabpanel" aria-labelledby="tabs-message-tab">
  Providing high-quality products by investing in the food and beverage industry.
  </div>
  <div className={openTab === 2 ? "block" : "hidden"} id="tabs-vision" role="tabpanel" aria-labelledby="tabs-vision-tab">
  To create an environment where guest satisfaction and delight are our highest priority. Food options’s restaurants and cafes will be the best choice in the local and international market.
  </div>
  <div className={openTab === 3 ? "block" : "hidden"} id="tabs-goals" role="tabpanel" aria-labelledby="tabs-goals-tab">
  1. Continuous development of our products to provide added value to achieve the satisfaction of our guests. 
  2. Creating Saudi concepts and brands that compete in the global market. 
  3. Aspiring to create local and international partnerships in the field of food and beverages.
  </div>  
  <div className={openTab === 4 ? "block" : "hidden"} id="tabs-scope" role="tabpanel" aria-labelledby="tabs-scope-tab">
  1.Creating varieties of brands characterized by creativity to be offered internationally. 
  2.Management and operation of brands of the highest quality and with high professionalism. 
  3.Providing consultations in establishing and developing restaurants and cafes by innovative means to achieve aspirations of partners and investors.   
  </div>
</div>
</div>
  );
}
export default AboutTab;