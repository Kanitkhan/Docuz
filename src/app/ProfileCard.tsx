import Image from "next/image";
import React from "react";
import photo from "../../public/photo.svg";

const ProfileCard = () => {
  return (
    <div className="outer2 bg-transparent border-[0.5px]  border-white rounded-3xl p-2 my-5">
      <div className="outer1 bg-transparent border-0 md:border-2 md:border-white rounded-3xl md:p-2 ">
        <div className="Card rounded-3xl bg-white md:h-52 xl:h-64 md:px-3 xl:px-6 grid grid-cols-2 md:py-4  xl:py-5 py-5 px-2">
          <div className="bioSection flex flex-col col-span-1 pl-1 md:pl-0">
            <div className=" relative h-16 w-16 md:h-20 md:w-20">
              <Image
                className="rounded-2xl object-cover"
                src={photo}
                alt="photo"
                objectFit="cover"
              />
            </div>
            <h1 className="lg:text-lg xl:text-xl md:text-sm text-base   font-semibold mt-4 xsm:leading-5  lg:leading-6">
              International passport
            </h1>
          </div>
          <div className="personDocs col-span-1 xl:pt-4 pl-2">
            <div className="singleSec mt-2">
              <h2 className="text-[#747474] text-xs md:text-[0.7rem] lg:text-sm">
                Document number
              </h2>
              <p className="my-[0.1rem] font-medium xs:text-sm md:text-sm lg:text-base lg:font-semibold">FU 404 808</p>
            </div>
            <div className="singleSec mt-2">
              <h2 className="text-[#747474] md:text-[0.7rem] lg:text-sm text-xs">
                Driving category
              </h2>
              <p className="my-[0.1rem] font-medium xs:text-sm md:text-sm lg:text-base lg:font-semibold">B, C</p>
            </div>
            <div className="singleSec mt-2">
              <h2 className="text-[#747474] md:text-[0.7rem] lg:text-sm text-xs">
                Date of issue
              </h2>
              <p className="my-[0.1rem] font-medium xs:text-sm md:text-sm lg:text-base lg:font-semibold">21.09.2018</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
