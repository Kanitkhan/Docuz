"use client"

import Image from "next/image";
import React from "react";
import bell from "../../public/bell.svg";
import search from "../../public/search.svg";
import Mobilemenu from "./Mobilemenu";
const Header = () => {


  let openMenu = ()  => {
    document.getElementById("mobileMenu")!.style.margin = "0"
 
   }
  let closeMenu  = ()  => {
    document.getElementById("mobileMenu")!.style.marginLeft = "-100vw"
  }


  return (
    <>
      <div className="headerBox md:grid md:grid-cols-7  xsm:flex xsm:justify-between xsm:items-center   xl:gap-28  py-8 ">
        <div onClick={()=>openMenu()} className="logo col-span-2 ">
          <h1  className="font-extrabold">Docuz</h1>
        </div>
        <nav className="nav md:col-span-3  md:flex  md:items-center xsm:hidden xl:px-14 lg:px-8">
          <ul className=" flex justify-between items-center space-x-10 w-full px-2">
            <li className="fontD font-semibold md:text-xs xl:text-base lg:text-sm">
              Dashboard
            </li>
            <li className="md:text-xs xl:text-base lg:text-sm">Payments</li>
            <li className="md:text-xs xl:text-base lg:text-sm">Utility</li>
            <li className="md:text-xs xl:text-base lg:text-sm">Statistics</li>
          </ul>
        </nav>
        <div className="navSearchBar flex lg:justify-around xl:justify-between md:justify-end xsm:justify-end col-span-2 items-center">
          <div className=" lg:w-3/5 xl:w-3/4 md:w-1/2 xsm:w-1/2 xsm:h-7 xl:h-auto md:h-7 flex items-center rounded-3xl bg-[#EBEFF1] pl-2 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#cfd2d4]">
           <Image src={search} alt="search" width={20}/>
            <input
              type="text"
              name="username"
              id="username"
              className="ml-1 block min-w-0 grow xl:py-1.5 xl:pl-1 xl:pr-3 md:w-1/2 xsm:w-1/3 xl:text-base md:text-xs  bg-[#EBEFF1] text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 xsm:text-sm/6"
              placeholder="Search"
            />
          </div>
          <button className=" rounded-full bg-[#EBEFF1] xl:p-2 md:p-1 text-sm ml-3">
            <span>
              <Image src={bell} alt="bell icon" width={20} height={30} />
            </span>
          </button>
        </div>
      </div>
      <hr className="h-4" /> 
    <Mobilemenu  />
    </>
  );
};

export default Header;
