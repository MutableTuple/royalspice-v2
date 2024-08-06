"use client";

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { LuShoppingBag } from "react-icons/lu";

export default function FoodCard2() {
  const [foodItems, setFoodItems] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://127.0.0.1:8000/api/alldishes/");
      const data = await response.json();
      setFoodItems(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = "scale(1)";
          } else {
            entry.target.style.transform = "scale(0.75)";
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [foodItems]);

  return (
    <>
      {foodItems.map((foodItem, index) => (
        <div
          key={foodItem.id}
          className="py-4 border-b transform transition-transform duration-300"
          ref={(el) => (cardRefs.current[index] = el)}
          style={{ transform: "scale(0.75)" }}
        >
          <div className="grid grid-cols-12 gap-4">
            <div className="sm:col-start-1 sm:col-end-3 col-start-1 col-end-4">
              <Link href="">
                <img
                  className="h-24 rounded-md w-full object-cover"
                  src={foodItem.imageUrl || foodItem.image}
                  alt={foodItem.name}
                />
              </Link>
            </div>
            <div className="sm:col-start-3 col-start-4 col-end-13 sm:col-end-13 flex flex-col">
              <div className="relative">
                <Link href="">
                  <h1 className="relative after:content-[''] after:block after:absolute after:left-0 after:bottom-[-7px] after:w-[92%] after:h-[1px] after:bg-transparent after:border-b after:border-dashed after:border-stone-500 after:border-1 font-semibold text-stone-700 flex justify-between">
                    {foodItem.name}
                    <span className="mr-16">
                      <h1>
                        € 1.
                        <sup className="">34</sup>
                      </h1>
                    </span>
                  </h1>
                </Link>
                <span className="right-14 text-stone-700 h-8 w-8 -bottom-0 font-semibold">
                  <h1 className=""></h1>
                </span>
                <span className="-right-0 absolute h-8 w-8 border flex items-center justify-center rounded-full -bottom-5">
                  <LuShoppingBag />
                </span>
              </div>
              <div className="mt-6">
                <p className="text-stone-400 sm:text-sm italic text-xs">
                  {foodItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
