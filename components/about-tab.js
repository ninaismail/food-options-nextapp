import Link from 'next/link';
import Image from 'next/image'

function AboutTab() {
  return (
<div class="w-full bg-my-teal-500  px-10 py-12 text-white">
<ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
  role="tablist">
  <li class="nav-item" role="presentation">
    <a href="#tabs-home" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      px-6
      py-3
      my-2
      active
    " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
      aria-selected="true">
        
    </a>
  </li>
  <li class="nav-item" role="presentation">
    <a href="#tabs-profile" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      px-6
      py-3
      my-2
    " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
      aria-controls="tabs-profile" aria-selected="false">

    </a>
  </li>
  <li class="nav-item" role="presentation">
    <a href="#tabs-messages" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      px-6
      py-3
      my-2
    " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
      aria-controls="tabs-messages" aria-selected="false">
        
    </a>
  </li>
  <li class="nav-item" role="presentation">
    <a href="#tabs-contact" class="
      nav-link
      disabled
      pointer-events-none
      block
      font-medium
      text-xs
      leading-tight
      px-6
      py-3
      my-2
    " id="tabs-contact-tab" data-bs-toggle="pill" data-bs-target="#tabs-contact" role="tab"
      aria-controls="tabs-contact" aria-selected="false">

    </a>
  </li>
</ul>
<div class="tab-content" id="tabs-tabContent">
  <div class="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
    Tab 1 content
  </div>
  <div class="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
    Tab 2 content
  </div>
  <div class="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
    Tab 3 content
  </div>
  <div class="tab-pane fade" id="tabs-contact" role="tabpanel" aria-labelledby="tabs-contact-tab">
    Tab 4 content
  </div>
</div>
</div>
  );
}
export default AboutTab;