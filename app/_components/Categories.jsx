import Link from "next/link";
import React from "react";

export default function Categories() {
  return (
    <div className="border border-1 md:mt-8 p-4 rounded-lg">
      <ul className="capitalize text-md font-semibold text-stone-800">
        <Link href="">
          <li className="flex items-center justify-between p-2">
            <span>
              <span className="text-gray-300">&mdash;</span> All dishes
            </span>
            <div className="rounded-full bg-gray-100 p-1 text-center font-normal text-xs w-8 text-gray-800">
              29
            </div>
          </li>
        </Link>
        <Link href="">
          <li className="flex items-center justify-between p-2">
            <span>
              <span className="text-gray-300">&mdash;</span> Non-veg
            </span>
            <div className="rounded-full bg-gray-100 p-1 text-center font-normal text-xs w-8 text-gray-800">
              29
            </div>
          </li>
        </Link>
        <Link href="">
          <li className="flex items-center justify-between p-2">
            <span>
              <span className="text-gray-300">&mdash;</span> Veg
            </span>
            <div className="rounded-full bg-gray-100 p-1 text-center font-normal text-xs w-8 text-gray-800">
              29
            </div>
          </li>
        </Link>
        <Link href="">
          <li className="flex items-center justify-between p-2">
            <span>
              <span className="text-gray-300">&mdash;</span> Vegan
            </span>
            <div className="rounded-full bg-gray-100 p-1 text-center font-normal text-xs w-8 text-gray-800">
              29
            </div>
          </li>
        </Link>
        <Link href="">
          <li className="flex items-center justify-between p-2">
            <span>
              <span className="text-gray-300">&mdash;</span> Gluten Free
            </span>
            <div className="rounded-full bg-gray-100 p-1 text-center font-normal text-xs w-8 text-gray-800">
              29
            </div>
          </li>
        </Link>
        <Link href="">
          <li className="flex items-center justify-between p-2">
            <span>
              <span className="text-gray-300">&mdash;</span> Lactose Free
            </span>
            <div className="rounded-full bg-gray-100 p-1 text-center font-normal text-xs w-8 text-gray-800">
              29
            </div>
          </li>
        </Link>
        <Link href="">
          <li className="flex items-center justify-between p-2">
            <span>
              <span className="text-gray-300 ">&mdash;</span> Sides
            </span>
            <div className="rounded-full bg-gray-100 p-1 text-center font-normal text-xs w-8 text-gray-800">
              29
            </div>
          </li>
        </Link>
        <Link href="">
          <li className="flex items-center justify-between p-2">
            <span>
              <span className="text-gray-300">&mdash;</span> Drinks
            </span>
            <div className="rounded-full bg-gray-100 p-1 text-center font-normal text-xs w-8 text-gray-800">
              29
            </div>
          </li>
        </Link>
        <Link href="">
          <li className="flex items-center justify-between p-2">
            <span>
              <span className="text-gray-300">&mdash;</span> Desserts
            </span>
            <div className="rounded-full bg-gray-100 p-1 text-center font-normal text-xs w-8 text-gray-800">
              29
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
}
