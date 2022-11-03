import CountUp from 'react-countup';

function BrandsCounter() {

  return (
    <div class="bg-my-beige-500 px-10 py-12 w-full h-full m-auto text-center 
    xs:flex xs:flex-wrap justify-evenly items-center">
        <div class="md:w-1/4 xs:w-1/2 w-full">
            <h2 class="xs:text-5xl text-3xl font-bold">+<CountUp end={15867} duration={10}/></h2>
            <p>Customers</p>
        </div>
        <div class="md:w-1/4 xs:w-1/2 w-full">
            <h2 class="xs:text-5xl text-3xl font-bold">+<CountUp end={100} duration={10}/></h2>
            <p>Partners</p>
        </div>
        <div class="md:w-1/4 xs:w-1/2 w-full">
            <h2 class="xs:text-5xl text-3xl font-bold">+<CountUp end={150} duration={10}/></h2>
            <p>Restaurent</p>
        </div>
        <div class="md:w-1/4 xs:w-1/2 w-full">
            <h2 class="xs:text-5xl text-3xl font-bold">+<CountUp end={19399} duration={10}/></h2>
            <p>Reviews</p>
        </div>                        
    </div>
  );
}

export default BrandsCounter;