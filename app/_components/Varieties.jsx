import React from "react";
import VarietyCard from "./VarietyCard";

export default function Varieties() {
  return (
    <div className="mt-16 gap-8 grid lg:grid-cols-6 grid-cols-1 sm:grid-cols-2 ">
      <VarietyCard
        image={
          "https://royalspice.nl/wp-content/uploads/2023/01/Food-All-dishes.png"
        }
        name={"All dishes"}
      />{" "}
      <VarietyCard
        image={
          "https://royalspice.nl/wp-content/uploads/2023/01/Food-GlutenFree.png"
        }
        name={"gluten free"}
      />{" "}
      <VarietyCard
        image={
          "https://royalspice.nl/wp-content/uploads/2023/01/Food-Lactosefree.png"
        }
        name={"lactose free"}
      />{" "}
      <VarietyCard
        image={
          "https://royalspice.nl/wp-content/uploads/2023/01/Food-Non-Veg.png"
        }
        name={"non veg"}
      />{" "}
      <VarietyCard
        image={"https://royalspice.nl/wp-content/uploads/2023/01/Food-Veg.png"}
        name={"veg"}
      />{" "}
      <VarietyCard
        image={
          "https://royalspice.nl/wp-content/uploads/2023/01/Food-Vegan.png"
        }
        name={"vegan"}
      />
    </div>
  );
}
