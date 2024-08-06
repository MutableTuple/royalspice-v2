"use client";

import Link from "next/link";
import SubNavbar from "./SubNavbar";
import { IoCall } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ setisVisibleSearch }) {
  const [isClosing, setIsClosing] = useState(true);
  const [isSubNavbarVisible, setIsSubNavbarVisible] = useState(true);

  const handleClose = () => {
    setIsClosing(false);
    setTimeout(() => setisVisibleSearch(true), 500); // Match this duration with your animation
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Adjust the scroll threshold as needed
        setIsSubNavbarVisible(false);
      } else {
        setIsSubNavbarVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="h-16 z-50 bg-dark-800 text-light-50 fixed w-full mt-4">
      <ul className="flex h-full gap-9 items-center justify-center uppercase font-medium text-sm">
        <Link href="/">
          <li>home</li>
        </Link>
        <Link href="/actions/about">
          <li>About royal spice</li>
        </Link>

        <Link href="#">
          <li className="mt-24">
            <div className="h-44 w-56 bg-yellow-400 clip-path-custom"></div>
          </li>
        </Link>
        <Link href="/actions/quick-order">
          <li>new: quick ordering</li>
        </Link>
        <Link href="/contact">
          <li>contact</li>
        </Link>
      </ul>
      <div className="flex mx-20 mt-8 justify-between ">
        <div className="py-1 text-stone-950 bg-white px-6 rounded-full shadow-lg">
          <span>Call now:</span>
          <h1 className="font-bold flex items-center gap-2">
            <IoCall size={18} /> 0416 851 891
          </h1>
        </div>
        <div className="py-1 flex gap-1 items-center text-stone-950 bg-white px-6 rounded-full shadow-lg">
          <div className="hover:bg-yellow-300 hover:cursor-pointer h-8 w-8 flex items-center justify-center rounded-full transition-all duration-300 ">
            <CiUser size={22} />
          </div>
          <div className="hover:bg-yellow-300 hover:cursor-pointer h-8 w-8 flex items-center justify-center rounded-full transition-all duration-300 ">
            <LuShoppingBag size={22} />
          </div>
          <div className="hover:bg-yellow-300 hover:cursor-pointer h-8 w-8 flex items-center justify-center rounded-full transition-all duration-300 ">
            <CiSearch size={22} onClick={handleClose} />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isSubNavbarVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ height: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.25 }}
          >
            <SubNavbar />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
