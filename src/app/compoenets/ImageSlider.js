import React, { useState } from "react";
// import cardTwo_1 from "../../../public/assets/cardTwo/card-two-1.svg";
// import cardTwo_2 from "../../../public/assets/cardTwo/card-two-2.svg";
// import cardTwo_3 from "../../../public/assets/cardTwo/card-two-3.svg";

import img1 from "../../../public/assets/cardTwo/img1.webp";
import img2 from "../../../public/assets/cardTwo/img2.webp";
import img3 from "../../../public/assets/cardTwo/img3.webp";

import Image from "next/image";

import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle
} from "react-icons/io";

import { RxDotFilled } from "react-icons/rx";

const data = [
    {
        imgSrc: img1,
        heading: "CJ",
        date: "Jan 30, 2024",
        text: "Shoplazza Merchants Can Now Easily Integrate with CJ via Plugin"
    },
    {
        imgSrc: img2,
        heading: "CJ",
        date: "Jan 24, 2024",
        text: "CJ Is Wagering Big on the Sports Betting Vertical…Want In?"
    },
    {
        imgSrc: img3,
        heading: "CJ",
        date: "Jan 15, 2024",
        text: "CJ Demystifies Shopping Browser Extensions with New Study"
    }
];

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const newIndex =
            currentIndex === 0 ? data.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const nextSlide = () => {
        const newIndex =
            currentIndex === data.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const gotoSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='w-full mx-auto relative flex items-center'>
            {/* left arrow */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[-70px] 2xl:left-[-120px] cursor-pointer'>
                <IoIosArrowDropleftCircle
                    onClick={prevSlide}
                    color='#C8E8FF'
                    className='h-[40px] w-[40px] 2xl:h-[60px] 2xl:w-[60px]'
                />
            </div>

            {/* right arrow */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[-70px] 2xl:right-[-120px] cursor-pointer'>
                <IoIosArrowDroprightCircle
                    onClick={nextSlide}
                    color='#C8E8FF'
                    className='h-[40px] w-[40px] 2xl:h-[60px] 2xl:w-[60px]'
                />
            </div>

            <div className='flex justify-between w-full'>
                {/* card 1 */}
                <a
                    target='_blank'
                    href='https://junction.cj.com/article/shoplazza-merchants-can-now-easily-integrate-with-cj-via-plugin'
                    className='flex flex-row justify-center no-underline'
                >
                    <div
                        className='flex flex-col justify-center text-white  
                        w-[270px] h-[380px]
                        xl:w-[330px] xl:h-[440px]
                        2xl:w-[400px] 2xl:h-[500px]
                        '
                    >
                        <Image
                            className='rounded-t-xl w-[270px] xl:w-[330px] 2xl:w-[400px]'
                            src={data[currentIndex].imgSrc}
                            alt='cardimage'
                        />
                        <div className='flex flex-col justify-evenly items-center bg-[#1E293B] h-[200px] rounded-b-xl'>
                            {/* <span className='text-[20px] xl:text-[24px]'>
                                {data[currentIndex].heading}
                            </span> */}
                            <span className='text-[18px] xl:text-[20px] text-gray-400'>
                                {data[currentIndex].date}
                            </span>
                            <span className='text-[15px] xl:text-[18px] px-6 text-center'>
                                {data[currentIndex].text}
                            </span>
                        </div>
                    </div>
                </a>
                {/* card 2 */}
                <a
                    target='_blank'
                    href='https://junction.cj.com/article/cj-is-wagering-big-on-the-sports-betting-vertical-want-in'
                    className='flex flex-row justify-center no-underline'
                >
                    <div
                        className='flex flex-col justify-center text-white
                     w-[270px] h-[380px]
                     xl:w-[330px] xl:h-[440px]
                     2xl:w-[400px] 2xl:h-[500px]'
                    >
                        <Image
                            className='rounded-t-xl w-[270px] xl:w-[330px] 2xl:w-[400px]'
                            src={data[(currentIndex + 1) % data.length].imgSrc}
                            alt='cardimage'
                        />
                        <div className='flex flex-col justify-evenly items-center bg-[#1E293B] h-[200px] rounded-b-xl'>
                            {/* <span className='text-[20px] xl:text-[24px]'>
                                {data[(currentIndex + 1) % data.length].heading}
                            </span> */}
                            <span className='text-[18px] xl:text-[20px] text-gray-400'>
                                {data[(currentIndex + 1) % data.length].date}
                            </span>
                            <span className='text-[15px] xl:text-[18px] px-6 text-center'>
                                {data[(currentIndex + 1) % data.length].text}
                            </span>
                        </div>
                    </div>
                </a>
                {/* card 3 */}
                <a
                    target='_blank'
                    href='https://junction.cj.com/article/cj-demystifies-shopping-browser-extensions-with-new-study'
                    className='flex flex-row justify-center no-underline'
                >
                    <div
                        className='flex flex-col justify-center text-white
                     w-[270px] h-[380px]
                     xl:w-[330px] xl:h-[440px]
                     2xl:w-[400px] 2xl:h-[500px]
                     '
                    >
                        <Image
                            className='rounded-t-xl w-[270px] xl:w-[330px] 2xl:w-[400px]'
                            src={data[(currentIndex + 2) % data.length].imgSrc}
                            alt='cardimage'
                        />
                        <div className='flex flex-col justify-evenly items-center bg-[#1E293B] h-[200px] rounded-b-xl'>
                            {/* <span className='text-[20px] xl:text-[24px]'>
                                {data[(currentIndex + 2) % data.length].heading}
                            </span> */}
                            <span className='text-[18px] xl:text-[20px] text-gray-400'>
                                {data[(currentIndex + 2) % data.length].date}
                            </span>
                            <span className='text-[15px] xl:text-[18px] px-6 text-center'>
                                {data[(currentIndex + 2) % data.length].text}
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
