import React, { useState } from "react";

import { RiCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function CartList() {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setisVisible(false), 500); // Match this duration with your animation
  };

  return (
    <motion.div
      className="h-lvh fixed w-full bg-red-500 z-[2000] flex items-center flex-col"
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: isClosing ? -1000 : 0, opacity: isClosing ? 1 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full p-8 flex justify-end">
        <RiCloseLine size={50} onClick={handleClose} />
      </div>
      <div className="py-24">
        <input
          type="text"
          placeholder="search for cuisines"
          className="w-[800px] py-6 px-6 outline-none    bg-stone-100 rounded-lg"
        />
      </div>
    </motion.div>
  );
}
