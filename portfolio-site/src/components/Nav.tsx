import React from "react";
import "../../public/menu-icon.svg";
import MenuIcon from "./icons/MenuIcon";
import { useState } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-full flex justify-between flex-wrap">
      <a href="/">Logo</a>
      <div className="md:hidden" onClick={() => toggleMenu()}>
        <MenuIcon />
      </div>
      <ul
        className={`w-full overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-100" : "max-h-0 "
        }  md:w-auto md:flex`}
      >
        <li>home</li>
        <li>about</li>
        <li>projects</li>
        <li>contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
