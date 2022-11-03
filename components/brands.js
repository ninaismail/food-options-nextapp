import Image from 'next/image'
import Counter from './brands-counter'

function BrandsSection() {
  return (
    <div>
<div class="relative top-0 left-0 w-full lg:h-full">
  <div class="relative bg-gray-900 opacity-75 h-full">
        <Image src="/brandsbg.jpg" width="1921"height="755"                          
        layout="responsive"objectFit="cover"alt="Food Options"/>
  </div>
  <div class="absolute left-0 right-0 w-full h-full top-0 bottom-0 z-10
    m-auto px-10 py-12 text-center flex justify-between items-center">
        <div className="w-1/2 h-1/2 xs:w-full xs:h-full">
        <Image src="/partnership.png" width="40"height="40" alt="Partnership"/> 
        </div>  
        <div>
            <h2 class="xs:text-5xl text-3xl font-bold mb-6 text-my-beige-500">Our Brands</h2>
            <Image src="/pulet.png" width="276"height="89" alt="Pulet" class="block m-auto"/> 
        </div>
        <div></div>
    </div>
  </div>   
  <Counter/>
</div>
  );
}

export default BrandsSection;