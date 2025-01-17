"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import MenuOpen from "@/public/images/menuOpen.svg";
import MenuClose from "@/public/images/menuClose.svg";
import RightArrow from "@/public/images/rightArrow.svg";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the mobile menu state
  };
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="pt-[20px] xl:px-[90px] lg:px-[40px] px-5">
        <div className="hidden  md:flex flex-wrap justify-between text-neutral-dark-gray text-[13px] font-primary ">
          <div className="leading-5 font-normal ">
            <span>Sample@gmail.com</span>
            <span> / </span>
            <span>+04 89 76 4576</span>
          </div>
          <div>
            <span className="font-normal leading-tight uppercase">
              Open from 9am to 5pm - Closed on Weekends
            </span>
          </div>
        </div>
        <div className="w-full h-[0px] opacity-40 border border-neutral-gray mt-2 mb-5 hidden md:block"></div>

        <nav className="flex items-center justify-between   ">
          <div>
            <Link href="/">
            <Image src={Logo} alt="StomaFlex Logo" />
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <div className="xl:mr-[205px] lg:mr-[150px] sm:mr-10 mr-4 text-neutral-gray text-base font-normal font-primary leading-normal">
              <ul className="flex lg:gap-8 gap-6">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/product">Product</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="px-[25px] py-3 bg-primary justify-center items-center gap-4 inline-flex text-white text-base font-medium font-primary">
              Get this from Jurhy <Image src={RightArrow} alt="Right Arrow" />
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="">
              {isOpen ? (
                <Image src={MenuClose} alt="Menu Close Icon"  />
              ) : (
                <Image src={MenuOpen}  alt="Menu Open Icon" />
              )}
            </button>
          </div>
        </nav>
        <div className="w-full h-[0px] opacity-40 border border-[#0000004D] md:hidden mt-5"></div>
        {/* Mobile Menu */}
        {isOpen && (
            
          <div  className={`md:hidden bg-white flex flex-col items-center transition-all duration-700 ease-in-out transform ${
            isOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-12"
          }`}
          style={{
            transitionDelay: isOpen ? "0.1s" : "0s",
          }}>
            
            <ul className="flex items-center w-full flex-col gap-4 pt-4 text-black text-base font-normal font-secondary leading-tight">
              <li  className={`transition-all duration-500 ease-in-out transform ${
                isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? "0.2s" : "0s" }}><Link href="/" onClick={handleLinkClick}>Home</Link></li>
              <div className="w-full h-[0px] opacity-40 border border-[#0000004D] "></div>

              <li className={`transition-all duration-500 ease-in-out transform ${
                isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? "0.4s" : "0s" }}><Link href="/about" onClick={handleLinkClick}>About Us</Link></li>
              <div className="w-full h-[0px] opacity-40 border border-[#0000004D]  "></div>

              <li className={`transition-all duration-500 ease-in-out transform ${
                isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? "0.6s" : "0s" }}><Link href="/product" onClick={handleLinkClick}>Product</Link></li>
              <div className="w-full h-[0px] opacity-40 border border-[#0000004D] "></div>

              <li className={`transition-all duration-500 ease-in-out transform ${
                isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? "0.8s" : "0s" }}><Link href="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
              <div className="w-full h-[0px] opacity-40 border border-[#0000004D]  "></div>
            </ul>
            <div className="px-[25px] mt-12 py-3 bg-primary justify-center items-center gap-4 inline-flex text-white text-base font-medium font-primary">
              Get this from Jurhy <Image src={RightArrow} alt="Right Arrow" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;