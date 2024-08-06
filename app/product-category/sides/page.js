"use client";

import React from "react";
import { useEffect, useState } from "react";
import FoodCard from "@/app/_components/FoodCard";
export default function Page() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://127.0.0.1:8000/api/sides/");
      const data = await response.json();
      setFoodItems(data);
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {foodItems.map((foodItem) => (
        <FoodCard
          key={foodItem.id}
          image={foodItem.imageUrl}
          name={foodItem.name}
          description={foodItem.description}
          cardHeight={72}
        />
      ))}
    </div>
  );
}
