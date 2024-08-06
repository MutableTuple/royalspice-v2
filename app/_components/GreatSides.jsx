import React from "react";
import FoodCard2 from "./FoodCard2";

export default function GreatSides() {
  return (
    <div className="px-20 py-20">
      <div className="mt-20 text-center ">
        <h1 className="text-5xl font-bold text-red-900">GREAT SIDES</h1>
        <p className="mt-8 font-medium text-stone-400 text-xl">
          For every main dish, there is a perfect side.
        </p>
      </div>
      <div className="grid md:grid-cols-2 mt-20 gap-12">
        <FoodCard2 />
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="uppercase font-bold mt-24 bg-dark-800  text-light-50 p-4 rounded-full text-sm hover:pointer hover:bg-stone-950 transition-all duration-300">
          See all Sides
        </button>
      </div>
    </div>
  );
}
