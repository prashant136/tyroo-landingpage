import Image from 'next/image'
import React from 'react'

export default function CardOne({ imgSrc, heading, text }) {
    return (
        <div className='flex flex-col justify-center gap-y-4 bg-[#265199] rounded-2xl px-6
        w-[300px] h-[280px]
        xl:w-[370px] xl:h-[340px]
        2xl:w-[450px] 2xl:h-[410px]
        '>
            <Image className='rounded-xl 
            w-[120px] h-[120px]
            xl:w-[140px] xl:h-[140px]
            2xl-[200px] 2xl-[200px]' src={imgSrc} alt="cardimage" />
            <span className='text-[18px] font-semibold xl:text-[24px] 2xl:text-[28px]'>{heading}:</span>
            <span className='text-[12px] font-normal xl:text-[14px] 2xl:text-[18px]'>{text}</span>
        </div>
    )
}
