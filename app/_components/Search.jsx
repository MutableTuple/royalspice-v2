import React, { useState, useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Search({ setisVisibleSearch }) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true); // Trigger the opening animation
  }, []);

  const handleClose = () => {
    setIsAnimating(false); // Trigger the closing animation
    setTimeout(() => setisVisibleSearch(false), 500); // Match this duration with your animation
  };

  return (
    <motion.div
      className="h-lvh fixed w-full bg-white z-[2000] flex items-center flex-col"
      initial={{ y: -1500, opacity: 0 }}
      animate={{ y: isAnimating ? 0 : -1500, opacity: isAnimating ? 1 : 0 }}
      transition={{ duration: 0.75 }}
    >
      <div className="w-full p-8 flex justify-end">
        <RiCloseLine size={50} onClick={handleClose} />
      </div>
      <div className="py-24">
        <input
          type="text"
          placeholder="search for cuisines"
          className="w-[800px] py-6 px-6 outline-none bg-stone-100 rounded-lg"
        />
      </div>
    </motion.div>
  );
}
