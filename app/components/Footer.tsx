import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  //   const socialLinks = [
  //     { icon: <Instagram size={18} />, href: "#" },
  //     { icon: <Facebook size={18} />, href: "#" },
  //     { icon: <Twitter size={18} />, href: "#" },
  //     { icon: <Youtube size={18} />, href: "#" },
  //   ];

  return (
    <footer
      className="bg-[#0B1221] text-white pt-16 pb-8 px-6 md:px-12 lg:px-24"
      id="footer"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand & Address Section */}
          <div className="flex flex-col gap-6">
            <div className="bg-white flex items-center justify-center pl-4 pt-4 pr-0 rounded-xl w-fit border border-slate-800">
              {/* Replace with your actual logo.png */}
              <div className="">
                <Image
                  src="/main-hero-logo.png"
                  alt="footer_logo"
                  width={200}
                  height={100}
                />
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-slate-500 text-sm font-medium">
                Our mission is to simplify UAE visa processing through a
                digital-first experience.
              </p>
            </div>

            {/* <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link 
                  key={index} 
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-[#1A2333] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all"
                >
                  {social.icon}
                </Link>
              ))}
            </div> */}
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">About</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="about"
                  className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="terms-of-use"
                  className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="privacy-policy"
                  className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="mailto:info@dubaitravels.org"
                  className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                >
                  info@dubaitravels.org
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/+971502947867"
                  className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                >
                  +971502947867
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Payment Section */}
        <div className="border-t border-slate-800/50 pt-5 flex flex-col items-center">
          <div className="hidden flex flex-wrap justify-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
            {/* Using placeholders to represent the payment icons seen in screenshot */}
            <div className="bg-white px-2 py-1 rounded flex items-center justify-center">
              <span className="text-[#1A1F71] font-bold text-xs">VISA</span>
            </div>
            <div className="bg-white px-2 py-1 rounded flex items-center justify-center">
              <span className="text-[#EB001B] font-bold text-xs">
                MasterCard
              </span>
            </div>
            <div className="bg-[#0070D1] px-2 py-1 rounded flex items-center justify-center text-white">
              <span className="font-bold text-[10px] uppercase leading-none text-center">
                American
                <br />
                Express
              </span>
            </div>
            <div className="bg-white px-2 py-1 rounded flex items-center justify-center overflow-hidden border">
              <span className="text-orange-500 font-black text-xs italic tracking-tighter">
                DISCOVER
              </span>
            </div>
          </div>
          <p className="pb-5 text-gray-400">
            We are an independent private travel assistance provider and are not
            affiliated with the UAE government, immigration authorities,
            embassy, or consulate.
          </p>
          <p>© 2026 dubaitravels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
