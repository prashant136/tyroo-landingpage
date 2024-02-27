import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import tyroo from "../../../public/assets/tyroo-logo.svg";
import Image from "next/image";

export default function Header() {
    const [lang, setLang] = useState("English");

    return (
        <Navbar expand='md' className='bg-body-tertiary'>
            <Navbar.Brand href='/'>
                <Image
                    src={tyroo}
                    alt='tyroo-logo'
                    width={150}
                    className='mx-4 lg:ml-10 xl:ml-16'
                    height={100}
                />
            </Navbar.Brand>
            <Navbar.Toggle className="mx-6" aria-controls='basic-navbar-nav' />
            <Navbar.Collapse className='mx-4' id='basic-navbar-nav'>
                <Nav className='me-auto text-xs lg:text-sm xl:text-[16px]'>
                    <Nav.Link
                        className='lg:mx-3'
                        href='https://tyroo.com/about-us/'
                    >
                        About Us
                    </Nav.Link>
                    <Nav.Link className='lg:mx-3' href='#link'>
                        Platform
                    </Nav.Link>
                    <Nav.Link
                        className='lg:mx-3'
                        href='https://tyroo.com/partnership/'
                    >
                        Partnerships
                    </Nav.Link>
                    <Nav.Link className='lg:mx-3' href='#link'>
                        Resources
                    </Nav.Link>
                </Nav>

                <Nav className='text-xs lg:text-sm xl:text-md xl:text-[16px]'>
                    <Nav.Link
                        className='lg:mx-3'
                        href='https://tyroo.com/contact-us/'
                    >
                        Contact Us
                    </Nav.Link>
                    <NavDropdown
                        className='lg:mx-3'
                        title={lang}
                        id='basic-nav-dropdown'
                    >
                        <NavDropdown.Item
                            onClick={() => {
                                setLang("English");
                            }}
                        >
                            English
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            onClick={() => {
                                setLang("Vietnamese");
                            }}
                        >
                            Vietnamese
                        </NavDropdown.Item>
                    </NavDropdown>
                    <button
                        className='w-[120px] py-1 text-xs text-white bg-[#F37E25] rounded-full
                    lg:text-sm lg:mx-4
                    xl:text-[16px] xl:w-[140px] xl:mr-10
                    '
                    >
                        Get Started
                    </button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
