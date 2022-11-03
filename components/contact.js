import Image from 'next/image'

function ContactSection() {
  return (
<div class="relative top-0 left-0 text-my-beige-500 w-full lg:h-full">
    <Image src="/contactbg1.jpg" width="1920" height="519"                          
    layout="responsive"alt="Food Options" className='sm:min-h-700 min-h-600'/>
  <div class="block absolute left-0 right-0 m-auto md:w-3/4 md:h-3/4 top-0 bottom-0 z-10 text-center px-10 py-12">
    <div>
        <h2 class="text-5xl font-bold mb-6">Contact Us</h2>
        <p class="mb-6 pb-2 lg:pb-0">
        how can we help you?</p>
    </div>
    <div class="m-auto h-fit">
    <form>
      <div class="md:grid md:grid-cols-2 md:gap-4">
        <div class="form-group mb-6">
          <input type="text" class="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-my-beige-500
            bg-transparent bg-clip-padding
            border border-solid border-my-beige-700
            transition
            ease-in-out
            m-0
            focus:border-my-beige-700 focus:outline-none" id="name"
            aria-describedby="name" placeholder="Name"/>
        </div>
        <div class="form-group mb-6">
          <input type="email" class="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-my-beige-500
            bg-transparent bg-clip-padding
            border border-solid border-my-beige-700
            transition
            ease-in-out
            m-0
            focus:border-my-beige-700 focus:outline-none" id="email"
            aria-describedby="email" placeholder="Email"/>
        </div>
      </div>
      <div class="form-group mb-6">
        <input type="subject" class="form-control block
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-my-beige-500
            bg-transparent bg-clip-padding
            border border-solid border-my-beige-700
            transition
            ease-in-out
            m-0
            focus:border-my-beige-700 focus:outline-none" id="subject"
            placeholder="Subject"/>
      </div>
      <div class="form-group mb-6">
        <textarea rows="5" class="form-control block
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-my-beige-500
            bg-transparent bg-clip-padding
            border border-solid border-my-beige-700
            transition
            ease-in-out
            m-0
            focus:border-my-beige-700 focus:outline-none" id="message"
            placeholder="Subject"></textarea>
      </div>    
      <div class="form-group mb-6">
        <button type="submit" class="
        block
        mb:w-1/4
        mx-auto
        px-3
        py-1.5
        text-base
        font-normal
        text-my-teal-500
        bg-my-beige-500 bg-clip-padding
        border border-solid border-my-beige-700
        transition
        ease-in-out
        m-0
        hover:bg-my-beige-700 focus:outline-none
        transition
        duration-150
        ease-in-out">Submit Message</button>
      </div>
    </form>
   </div>
  </div>
</div> 
  );
}

export default ContactSection;