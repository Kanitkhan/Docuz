

import React from 'react'
import cross from "../../public/cross.svg";
import Image from 'next/image';



const Mobilemenu = () => {


    let openMenu = ()  => {
        document.getElementById("mobileMenu")!.style.margin = "0"
     
       }
      let closeMenu  = ()  => {
        document.getElementById("mobileMenu")!.style.marginLeft = "-100vw"
      }
   

  return (
    <div className="-mx-3">

    <div id="mobileMenu" className="  w-screen h-screen md:hidden z-10 bg-gradient-to-r from-green-500 to-green-200 mx-[-100vw] m-0   absolute top-0 px-3 py-8">
    <div className="mobilehead flex justify-between items-center ">
    <div >

    <h1 onClick={()=>closeMenu()} className="font-extrabold">Docuz</h1>
    </div>
    <Image onClick={()=>closeMenu()} src={cross} width={30} alt="cross"/>
    </div>
  <ul className="flex flex-col items-center mt-10 space-y-5">
    <h1 className="font-semibold text-lg">Dashboard</h1>
    <h1 className="font-semibold text-lg">Payments</h1>
    <h1 className="font-semibold text-lg">Utility</h1>
    <h1 className="font-semibold text-lg">Statistics</h1>
  </ul>
    </div>
  </div>
  )
}

export default Mobilemenu