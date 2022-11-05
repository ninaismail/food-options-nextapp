import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./header-item";
const MENU_LIST = [
  { text: "Brands", href: "#brands" },
  { text: "About Us", href: "#about" },
  { text: "Contact", href: "#contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav>
        <Link href={"/"} className="logo">
          <Image src="/Group-3.png" width="121" height="61" alt="Food Options Logo" />
        </Link>
        <div className="nav__menu-bar"
          onClick={() => setNavActive(!navActive)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list `}>
          {MENU_LIST.map((menu, idx) => (
            <div 
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
        <a href="#" class="block py-2 pr-4 pl-3 hover:text-zinc-500">Ar</a>
      </nav>
    </header>
  );
};

export default Navbar;