import CountUp from 'react-countup';

function BrandsCounter() {

  return (
    <div class="bg-my-beige-500 w-full h-1/4 px-10 py-12 w-full h-full m-auto text-center flex justify-evenly items-center">
        <div>
            <h2 class="text-5xl font-bold">+<CountUp end={15867} duration={4}/></h2>
            <p>Customers</p>
        </div>
        <div>
            <h2 class="text-5xl font-bold">+<CountUp end={100} duration={4}/></h2>
            <p>Partners</p>
        </div>
        <div>
            <h2 class="text-5xl font-bold">+<CountUp end={150} duration={4}/></h2>
            <p>Restaurent</p>
        </div>
        <div>
            <h2 class="text-5xl font-bold">+<CountUp end={19399} duration={4}/></h2>
            <p>Reviews</p>
        </div>                        
    </div>
  );
}

export default BrandsCounter;