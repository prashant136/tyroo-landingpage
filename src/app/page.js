"use client";
import { useState } from "react";
import Body from "./compoenets/Body";
import Header from "./compoenets/Navbar";

export default function Home() {
    return (
        <div className='w-screen h-screen'>
            <Header />
            <Body />
        </div>
    );
}
