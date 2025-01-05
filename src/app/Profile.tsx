import React from "react";
import profile from "../../public/profile.svg";
import right from "../../public/right.svg";
import door from "../../public/door.svg";
import qr from "../../public/qr.svg";
import sign from "../../public/sign.svg";
import Image from "next/image";
import ReceiptSub from "./ReceiptSub";
import ProfileCardSec from "./ProfileCardSec";
import PicBlock from "./PicBlock";

const Profile = () => {
  return (
    <div className="profile md:grid grid-cols-7   xl:gap-28 ">
      <div className="col-span-2  py-10 firstGrid ">
        <h1 className="md:text-2xl text-4xl xl:text-4xl font-semibold">Alex Stone</h1>
        <p className="text-[#747474] md:text-base text-lg   font-medium my-2">34 years old</p>
        <div className="flex justify-between  bg-white px-4 py-2 xl:py-4 md:py-3 md:px-2 xl:px-4 rounded-lg mt-9 mb-3">
    
            <div className="flex">
              <Image src={profile} alt={"profile"} width={50} height={30} />
              <div className="flex flex-col ml-4">
                <p className="text-[#747474] md:text-xs lg:text-base font-medium"> In the process</p>
                <h4 className="font-medium md:text-sm lg:text-base xl:text-lg">Insurance</h4>
              </div>
            
          </div>
          <Image src={right} alt={"right"} width={30} height={30} />
        </div>
        <div className=" receiptSection py-5">
          <div className="flex justify-between">
            <h2 className="font-semibold  lg:text-base md:text-xs my-3">Receipt Steps</h2>
            <h2 className="font-medium lg:text-base md:text-xs text-green-500 my-3 cursor-pointer">
              View Details
            </h2>
          </div>
          <hr className="my-2" />
          <div className="receitDetails px-3">
            <ReceiptSub detail="Purpose of insurance" value={13.06} />
            <ReceiptSub detail="Purpose of insurance" value={13.06} />
            <ReceiptSub detail="Purpose of insurance" value={13.06} />
            <ReceiptSub detail="Purpose of insurance" value={13.06} />
            <ReceiptSub detail="Purpose of insurance" value={13.06} />
            <ReceiptSub detail="Purpose of insurance" value={13.06} />
          </div>
        </div>
        <div className="est bg-[#D4EDC2] py-3 px-4  md:px-3 md:py-4 lg:px-5 lg:pt-7 pb-5 rounded-lg">
          <div className="flex">
            <Image src={door} alt="door" width={35} />
            <div className="estTexts ml-5">
              <h2 className="md:text-sm xsm:font-medium xsm:text-center lg:text-left lg:text-base text-[#747474]">Estimated price</h2>
              <p className="font-bold text-lg xsm:text-center lg:text-left xsm:mt-2 md:mt-1 ">$199</p>
            </div>
            <div className="flex items-start mb-5">
              <h2 className="ml-10 font-bold text-xl">...</h2>
            </div>
          </div>
          <button className="bg-black text-white  md:text-sm lg:text-base rounded-lg w-full lg:py-2 py-1.5 xsm:mt-2  lg:mt-4  ">
            Pay now
          </button>
        </div>
      </div>
      <div className="col-span-3 md:px-3 xl:px-14 relative flex items-center justify-center">
        <ProfileCardSec />
        <div className="bg-gradient-to-r from-green-500 to-green-200 greenCircle h-1/3 md:h-1/3  xl:h-1/2 w-full opacity-60  rounded-full z-[-1] absolute top-32  "></div>
      </div>
      <div className="col-span-2 md:px-2 xl:px-0">
        <div className="codeAndSign flex justify-between mt-5 md:mt-0 ">
          <PicBlock img={qr} alt="qr" blockText="QR code" bgc="greytab" rounded={false}/>
          <PicBlock img={sign} alt="sign" blockText="E-signature" bgc="peach"  rounded={true}/>
        </div>
        <div className="flex justify-between mt-7">
            <h2 className="font-semibold text-xl md:text-lg xl:text-xl md:leading-6 xl:leading-none w-1/2">International passport</h2>
            <h2 className="font-semibold text-3xl md:text-lg xl:text-3xl">...</h2>
        </div>
        <div className="bioStatus mt-5">
          <h3 className="text-[#747474] text-sm md:text-xs lg:text-sm font-medium mt-4">Sex</h3>
          <p className="font-semibold text-base md:text-sm lg:text-base">Man</p>
          <h3 className="text-[#747474] text-sm md:text-xs lg:text-sm font-medium mt-4">Marital status</h3>
          <p className="font-semibold text-base md:text-sm lg:text-base">Married</p>
          <h3 className="text-[#747474] text-sm md:text-xs lg:text-sm font-medium mt-4">Nationality</h3>
          <p className="font-semibold text-base md:text-sm lg:text-base">Poland</p>

        </div>
        <hr className="bg-[#747474] h-0.5 opacity-30 my-7" />
        <div className="docsDates mt-5">
          <h3 className="text-[#747474] text-sm md:text-xs lg:text-sm font-medium mt-4">Documnent number</h3>
          <p className="font-semibold text-base md:text-sm lg:text-base">FU 404 808</p>
          <h3 className="text-[#747474] text-sm md:text-xs lg:text-sm font-medium mt-4">Date of issue</h3>
          <p className="font-semibold text-base md:text-sm lg:text-base">23.04.2020</p>
          <h3 className="text-[#747474] text-sm md:text-xs lg:text-sm font-medium mt-4">Date of expiry</h3>
          <p className="font-semibold text-base md:text-sm lg:text-base">23.04.2030</p>

        </div>
        <hr className="bg-[#747474] h-0.5 opacity-30 my-7" />
        <div className="address mt-5">
          <h3 className="text-[#747474] text-sm md:text-xs lg:text-sm font-medium mt-4">Tax Number</h3>
          <p className="font-semibold text-base md:text-sm lg:text-base">12344 34535</p>
          <h3 className="text-[#747474] text-sm md:text-xs lg:text-sm font-medium mt-4">Place of birth</h3>
          <p className="font-semibold text-base md:text-sm lg:text-base">Wroclaw city</p>
          <h3 className="text-[#747474] text-sm md:text-xs lg:text-sm font-medium mt-4">Legal address</h3>
          <p className="font-semibold text-base md:text-sm lg:text-base">ul, Slezna 28, Krzyki, Wroclaw</p>

        </div>
      </div>
    </div>
  );
};

export default Profile;
