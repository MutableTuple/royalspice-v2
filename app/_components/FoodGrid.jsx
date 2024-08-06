import FoodCard from "./FoodCard";

export default function FoodGrid() {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-8 ">
      <FoodCard
        image={
          "https://royalspice.nl/wp-content/uploads/2021/12/Butter-chicken-2-1-300x300.png"
        }
        name={"Butter Chicken"}
        description={`Butter Chicken is een mix van gemarineerde kip in een romige tomatensaus en Indiase kruiden! De Butter Chicken is het mildste gerecht van ons menu!
    `}
      />
      <FoodCard
        image={
          "https://royalspice.nl/wp-content/uploads/2024/01/Cocktail-Samosa-300x300.jpg"
        }
        name={"CockTail samosa 5st"}
        description={`Cocktail samosa is een kleine, knapperige Indiase snack, gevuld met gekruide aardappelen en groenten, perfect voor feestjes en wordt geserveerd met chutney. (5 st.)ld met gekruide aardappelen en groenten, perfect voor feestjes en wordt geserveerd met chutney. 
    `}
      />{" "}
      <FoodCard
        image={
          "https://royalspice.nl/wp-content/uploads/2021/12/Butter-chicken-2-1-300x300.png"
        }
        name={"Butter Chicken"}
        description={`Butter Chicken is een mix van gemarineerde kip in een romige tomatensaus en Indiase kruiden! De Butter Chicken is het mildste gerecht van ons menu!
  `}
      />{" "}
      <FoodCard
        image={
          "https://royalspice.nl/wp-content/uploads/2021/12/Butter-chicken-2-1-300x300.png"
        }
        name={"Butter Chicken"}
        description={`Butter Chicken is een mix van gemarineerde kip in een romige tomatensaus en Indiase kruiden! De Butter Chicken is het mildste gerecht van ons menu!
`}
      />{" "}
      <FoodCard
        image={
          "https://royalspice.nl/wp-content/uploads/2021/12/Butter-chicken-2-1-300x300.png"
        }
        name={"Butter Chicken"}
        description={`Butter Chicken is een mix van gemarineerde kip in een romige tomatensaus en Indiase kruiden! De Butter Chicken is het mildste gerecht van ons menu!
  `}
      />
    </div>
  );
}
