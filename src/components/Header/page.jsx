"use client";
import React, { useState } from "react";
import Logo from "../../../public/Images/logo.png";
import Image from "next/image";
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { LuBadgeHelp } from "react-icons/lu";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    { icon: <CiSearch />, name: "Search" },
    { icon: <BiSolidOffer />, name: "Offers", sub:"NEW" },
    { icon: <LuBadgeHelp />, name: "Help" },
    { icon: <RiAccountCircleLine />, name: "Sign In" },
    { icon: <FaCartArrowDown />, name: "Cart" },
  ];
  return (
    <>
      <div
        className="bg-[rgba(0,0,0,0.7)]
    h-full w-full fixed duration-500 z-10"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] bg-white h-full  absolute duration-500 z-10"
          style={{ left: toggle ? "0%" : "-100%" }}
        ></div>
      </div>
      <header className="p-[10px] shadow-xl">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[8vw]">
            <Image
              src={Logo}
              quality={100}
              height={100}
              width={100}
              alt="logo"
              className="object-cover h-20 w-20"
            />
          </div>
          <div
            className="flex items-center cursor-pointer focus:scale-[.9]"
            onClick={showSideMenu}
          >
            <span className="font-semibold text-md border-b-[3px] border-black hover:border-orange-500 hover:text-orange-500 duration-300">
              Lajpat Nagar
            </span>
            , New Delhi, India
            <RxCaretDown fontSize={25} className=" font-bold text-[#fc8019]" />
          </div>
          <nav className="flex list-none gap-7 text-[18px] ml-auto">
            {links.map((link, index) => {
              return (
                <li
                  className=" flex items-center gap-2 font-medium hover:text-[#fc8019] duration-150 cursor-pointer"
                  key={index}
                >
                  {link.icon}
                  {link.name}
                  <sup className="text-[#fc8019]">{link.sub}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
