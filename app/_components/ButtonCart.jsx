import React from "react";
import { LuShoppingBag } from "react-icons/lu";
export default function ButtonCart() {
  return (
    <button className="flex items-center justify-center tracking-wider uppercase gap-2 text-xs mt-4 font-medium text-stone-800">
      <span>
        <LuShoppingBag size={24} />
      </span>{" "}
      Add to cart
    </button>
  );
}
