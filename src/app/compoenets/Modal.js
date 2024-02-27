import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Modal({ modalState, setModalState }) {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-2'>
            <div className='relative w-[400px] bg-[#F7F7F7] flex flex-col justify-between rounded-lg py-6 xl:w-[700px]'>
                <button
                    className='text-xl text-gray-600 absolute right-2 top-1 cursor-pointer lg:text-[24px]'
                    onClick={() => {
                        setModalState({ open: false });
                    }}
                >
                    X
                </button>
                <div className='flex flex-col w-full xl:gap-y-4'>
                    {/* input fields */}
                    <div className='flex flex-col items-center'>
                        <p className='text-center text-[24px] font-semibold xl:text-[30px]'>
                            Contact Us
                        </p>
                        <p className='text-center text-[14px] px-12 xl:text-[20px]'>
                            Any question or remarks? Just write us a message!
                        </p>
                    </div>
                    <div className='flex flex-col items-center gap-y-12'>
                        <div class='w-[350px] xl:w-[450px]'>
                            <label
                                class='block text-gray-700 text-sm xl:text-lg'
                                for='firstName'
                            >
                                Full Name
                            </label>
                            <input
                                type='text'
                                class='bg-[#F7F7F7] w-full border-b-gray-500 border-2 border-t-[#F7F7F7] border-l-[#F7F7F7] border-r-[#F7F7F7] focus:border-transparent focus:ring-0 focus:border-b-black focus:outline-none'
                            />
                        </div>
                        <div class='w-[350px] xl:w-[450px]'>
                            <label
                                class='block text-gray-700 text-sm xl:text-lg'
                                for='firstName'
                            >
                                Mobile No.
                            </label>
                            <input
                                type='number'
                                class='bg-[#F7F7F7] w-full border-b-gray-500 border-2 border-t-[#F7F7F7] border-l-[#F7F7F7] border-r-[#F7F7F7] focus:border-transparent focus:ring-0 focus:border-b-black focus:outline-none'
                            />
                        </div>
                        <div class='w-[350px] xl:w-[450px]'>
                            <label
                                class='block text-gray-700 text-sm xl:text-lg'
                                for='firstName'
                            >
                                Company Name
                            </label>
                            <input
                                type='text'
                                class='bg-[#F7F7F7] w-full border-b-gray-500 border-2 border-t-[#F7F7F7] border-l-[#F7F7F7] border-r-[#F7F7F7] focus:border-transparent focus:ring-0 focus:border-b-black focus:outline-none'
                            />
                        </div>
                        <div class='w-[350px] xl:w-[450px]'>
                            <label
                                class='block text-gray-700 text-sm xl:text-lg'
                                for='firstName'
                            >
                                Email
                            </label>
                            <input
                                type='email'
                                class='bg-[#F7F7F7] w-full border-b-gray-500 border-2 border-t-[#F7F7F7] border-l-[#F7F7F7] border-r-[#F7F7F7] focus:border-transparent focus:ring-0 focus:border-b-black focus:outline-none'
                            />
                        </div>
                        <button className='flex w-[150px] justify-center items-center gap-x-2 py-1 text-[14px] text-white bg-[#F37E25] rounded-full xl:w-[220px] xl:text-[20px]'>
                            Sign up now
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
