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
    <nav className=" border-2 w-full ">
      <ul className="flex justify-between border-2 border-amber flex-col">
        <li className="flex justify-end md:hidden" onClick={() => toggleMenu()}>
          <MenuIcon />
        </li>
        {isOpen && (
          <div>
            <li>home</li>
            <li>about</li>
            <li>projects</li>
            <li>contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
