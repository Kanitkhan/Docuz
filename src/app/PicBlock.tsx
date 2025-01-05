import Image from "next/image";
import React from "react";

interface block {
  img: string;
  alt: string;
  blockText: string;
  bgc: string;
  rounded:boolean
}

const PicBlock = (props: block) => {
  return (
    <div className={`imageBlock ${props.alt == "qr" ? "bg-greytab" : "bg-peach"}  rounded-lg p-3 `}>
      <div className={` relative lg:w-24 xl:h-24 xl:w-28 w-28 md:w-16   ${props.rounded ? "rounded-lg" : ""}`}>
        <Image
          className=" object-cover "
          objectFit="cover"
          src={props.img}
          alt={props.alt}
        />
      </div>{" "}
      <p className="mt-7 md:mt-2 xl:mt-7 xl:text-base  md:text-[0.6rem] md:font-medium font-medium text-center ">{props.blockText}</p>{" "}
    </div>
  );
};

export default PicBlock;
