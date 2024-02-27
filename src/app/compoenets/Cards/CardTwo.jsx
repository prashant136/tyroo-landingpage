import Image from 'next/image'
import React from 'react'

export default function CardTwo({ imgSrc, heading, date, text, link }) {
    return (
        <a target="_blank" href={link} className='flex flex-col justify-center w-[320px] h-[420px] text-white no-underline'>
            <Image className='rounded-t-xl' width={320} height={180} src={imgSrc} alt="cardimage" />
            <div className='flex flex-col justify-around items-center bg-[#1E293B] h-[240px] rounded-b-xl'>
                {/* <span className='text-lg'>{heading}</span> */}
                <span className='text-md text-gray-400'>{date}</span>
                <span className='text-sm px-6'>{text}</span>
            </div>
        </a>
    )
}
