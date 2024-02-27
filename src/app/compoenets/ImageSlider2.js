import React, { useState } from "react";
import brandcj_1 from "../../../public/assets/brands/brandcj-1.webp";
import brandcj_2 from "../../../public/assets/brands/brandcj-2.webp";
import brandcj_3 from "../../../public/assets/brands/brandcj-3.webp";
import brandcj_4 from "../../../public/assets/brands/brandcj-4.webp";
import brandcj_5 from "../../../public/assets/brands/brandcj-5.webp";
import CJ from "../../../public/assets/brands/CJ.png";

import Image from "next/image";

import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle
} from "react-icons/io";

import { RxDotFilled } from "react-icons/rx";

const data = [
    {
        imgSrc: brandcj_1,
        iconSrc: CJ,
        text: "Expedia Group & FlipGive Shatter Revenue & Social Impact Goals with Unique Partnership Enabled by CJ",
        brandName: "CASE STUDY",
        featured: true,
        link: "https://www.cj.com/case-study/expedia-group-flipgive-shatter-revenue-social-impact-goals-with-cj"
    },
    {
        imgSrc: brandcj_2,
        iconSrc: CJ,
        text: "Consumer Electronics Brand Sees Big Growth from Recruitment & Activation",
        brandName: "CASE STUDY",
        featured: true,
        link: "https://www.cj.com/case-study/consumer-electronics-brand-sees-growth-from-recruitment-activation"
    },
    {
        imgSrc: brandcj_3,
        iconSrc: CJ,
        text: "Autodesk Leverages CJ Affiliate for Successful APAC Expansion",
        brandName: "CASE STUDY",
        featured: false,
        link: "https://www.cj.com/case-study/autodesk-leverages-cj-affiliate-for-successful-apac-expansion"
    },
    {
        imgSrc: brandcj_4,
        iconSrc: CJ,
        text: "Fortune 500 Retailer Drives Incremental Revenue using CJ Customer-Level Omni-Channel Insights",
        brandName: "CASE STUDY",
        featured: false,
        link: "https://www.cj.com/case-study/fortune-500-retailer-drives-incremental-revenue-using-cj-customer-level-omni-channel"
    },
    {
        imgSrc: brandcj_5,
        iconSrc: CJ,
        text: "Lifestyle Blogger Sees Revenue Growth through Audience Expansion",
        brandName: "CASE STUDY",
        featured: false,
        link: "https://www.cj.com/case-study/lifestyle-blogger-sees-revenue-growth-through-audience-expansion"
    }
];

export default function ImageSlider2() {
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
        <div className='max-w-md mx-auto relative flex flex-col items-center'>
            {/* cards */}
            <a
                href={data[currentIndex].link}
                target='_blank'
                style={{
                    backgroundImage: `linear-gradient(6deg, rgba(2,0,36,1) 0%, rgba(18,144,180,0.02006740196078427) 100%, rgba(0,212,255,1) 100%), url(${data[currentIndex].imgSrc.src})`,
                    width: "80%",
                    height: 360,
                    backgroundSize: "cover",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: data[currentIndex].featured
                        ? "space-between"
                        : "flex-end",
                    padding: 30,
                    borderRadius: 14,
                    textDecoration: "none"
                }}
            >
                {data[currentIndex].featured ? (
                    <span className='bg-white w-[100px] text-sm py-1 flex justify-center item-center rounded-full text-green-500 font-semibold'>
                        FEATURED
                    </span>
                ) : null}

                <div className='flex flex-col text-white'>
                    <h1 className='font-semibold text-[20px]'>
                        {data[currentIndex].heading}
                    </h1>
                    <p className='font-light text-[14px]'>
                        {data[currentIndex].text}
                    </p>
                    <div className='flex items-center space-x-6'>
                        <Image
                            src={data[currentIndex].iconSrc}
                            width={50}
                            height={50}
                            alt='swiggy'
                            className='rounded-full'
                        />
                        <span className='text-[10px] font-bold bg-[#43bfb6] py-1 px-2 rounded-sm'>
                            {data[currentIndex].brandName}
                        </span>
                    </div>
                </div>
            </a>

            {/* left arrow */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[0px] cursor-pointer'>
                <IoIosArrowDropleftCircle
                    onClick={prevSlide}
                    color='#1E293B'
                    style={{ height: 35, width: 35 }}
                />
            </div>

            {/* right arrow */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[0px] cursor-pointer'>
                <IoIosArrowDroprightCircle
                    onClick={nextSlide}
                    color='#1E293B'
                    style={{ height: 35, width: 35 }}
                />
            </div>

            {/* dots */}
            <div className='flex justify-center mt-2'>
                {data.map((slide, index) => (
                    <div
                        key={index}
                        className='text-3xl cursor-pointer'
                        onClick={() => {
                            gotoSlide(index);
                        }}
                    >
                        <RxDotFilled className='text-[#F37E25]' />
                    </div>
                ))}
            </div>
        </div>
    );
}
