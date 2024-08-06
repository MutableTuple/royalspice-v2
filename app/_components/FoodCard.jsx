import React, { useEffect, useRef } from "react";
import ButtonCart from "./ButtonCart";

export default function FoodCard({ image, name, description, cardHeight }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = "scale(1)";
          } else {
            entry.target.style.transform = "scale(1.25)";
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      className="flex flex-col gap-2 mt-12 text-center relative transform transition-transform duration-300"
      ref={cardRef}
      style={{ transform: "scale(1.25)" }}
    >
      <div className="absolute bg-yellow-300 font-bold text-red-500 text-xs p-1.5 mx-2 my-2 rounded-md">
        $12.32
      </div>
      <img
        className={`rounded-md max-h-72 object-cover`}
        src={image}
        alt={image}
      />
      <h2 className="capitalize font-medium">{name}</h2>
      <p className="text-sm text-slate-500">{description}</p>
      <ButtonCart />
    </div>
  );
}
