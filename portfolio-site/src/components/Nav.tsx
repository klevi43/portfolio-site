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
    <nav className="pt-4 w-full justify-self-center md:justify-self-end">
      <ul className="flex flex-col md:flex-row">
        <li
          className="flex justify-end pr-3 md:hidden"
          onClick={() => toggleMenu()}
        >
          <MenuIcon />
        </li>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:w-full md:flex-row md:justify-between`}
        >
          <li>home</li>
          <li>about</li>
          <li>projects</li>
          <li>contact</li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
