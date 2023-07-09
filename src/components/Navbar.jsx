import React, { useCallback, useEffect, useState } from "react";
import logo from "../images/logo.png";
import profile from "../images/default-blue.png";
import NavItem from "./NavItem";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [accountMenu, setAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    handleScroll();
    // eslint-disable-next-line
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 66) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  };

  const toggleMobileMenu = useCallback(() => {
    setMobileMenu((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setAccountMenu((current) => !current);
  }, []);

  return (
    <nav className=" w-full fixed z-40 ">
      <div
        className={`${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }  px-4 lg:px-16 py-6 flex flex-row items-center transition duration-500`}
      >
        {/* Logo */}
        {/* <p className="text-red-700 font-semibold text-xl lg:text-[30px]">
          ThianchaI
        </p> */}
        <img className="h-5 lg:h-7" src={logo} alt="logo" />
        {/* Navbar Items */}
        <div className="hidden lg:flex flex-row ml-8 gap-8">
          <NavItem label="Home" />
          <NavItem label="Series" />
          <NavItem label="Films" />
          <NavItem label="New & Popular" />
          <NavItem label="My List" />
          <NavItem abel="Browse by languages" />
        </div>
        {/* Mobile Menu */}
        <div
          className="lg:hidden flex flex-row text-white items-center gap-2 ml-8 relative cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <p className=" text-sm">Browse</p>
          <BsChevronDown
            className={`transition ${mobileMenu ? "rotate-180" : "rotate-0"}`}
          />
          <MobileMenu visible={mobileMenu} />
        </div>
        {/* Navbar Icons*/}
        <div className="flex flex-row ml-auto gap-7 items-center">
          <BsSearch className="text-gray-200 hover:text-gray-300 cursor-pointer transition" />
          <BsBell className="text-gray-200 hover:text-gray-300 cursor-pointer transition" />
          {/* Account */}
          <div
            className="flex flex-row items-center gap-2 cursor-pointer relative"
            onClick={toggleAccountMenu}
          >
            <img
              className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden"
              src={profile}
              alt="profile"
            />
            <div className="text-white cursor-pointer transition">
              <BsChevronDown
                className={`transition ${
                  accountMenu ? "rotate-180" : "rotate-0"
                }`}
              />
              <AccountMenu visible={accountMenu} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
