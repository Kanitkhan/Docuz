import React from 'react'
import tick from "../../public/tick.svg"
import Image from 'next/image'

interface receit {
    detail: string;
    value: number;
}

const ReceiptSub = (props:receit) => {
    
  return (
    <div className="receiptSb my-5">
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <div className= " p-1 lg:p-2 tickCircle rounded-full bg-white flex items-center justify-center">
                       <Image src={tick} alt="tick" height={15} width={15}/>
                </div>
                <h3 className='md:text-xs lg:text-sm font-medium ml-3 '>{props.detail}</h3>
            </div>
            <p className="value text-[#747474] text-sm">{props.value}</p>

        </div>
    </div>
  )
}

export default ReceiptSub