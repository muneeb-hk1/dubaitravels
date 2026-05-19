"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 1. Move this OUTSIDE the Navbar component
const ExpressServiceButton = ({ className = "" }) => (
  <Link href="https://wa.me/+971502947867" className={`bg-[#202E56] text-white text-[14px] font-medium px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-150 shrink-0 ${className}`}>
    Express Service
  </Link>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Get Entry', href: 'apply' },
    { name: 'Track', href: 'track-application' },
    { name: 'Faq', href: 'faq' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mt-3 px-4 md:px-10">
      <div className="bg-white/80 backdrop-blur-md rounded-xl md:rounded-full shadow-lg max-w-full mx-auto transition-all duration-300">
        <div className="flex items-center justify-between px-6 md:px-10 h-20 md:h-17">
          
          {/* Logo Section */}
          <Link href="/" className="">
            <div className="w-40 h-10 md:w-50 md:h-20 relative flex items-center justify-center">
              {/* Replace with your SVG or Logo path */}
              
              <Image src="/main-hero-logo.png" alt="logo" width={200} height={200} priority/>
            </div>
           
          </Link>

          {/* Desktop Navigation & Button */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-[#202E56] text-base font-medium hover:text-black transition-colors duration-150 whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <ExpressServiceButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#202E56]"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? '!max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-8 pb-8 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="block text-[#202E56] text-lg font-medium">
                {link.name}
              </Link>
            ))}
            <ExpressServiceButton className="w-full" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;