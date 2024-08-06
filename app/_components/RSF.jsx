import Varieties from "./Varieties";
import FoodGrid from "./FoodGrid";
export default function RSF() {
  return (
    <div className="mx-24 flex flex-col items-center justify-center">
      <Varieties />
      <div className="h-auto">
        <div className="mt-40 text-center ">
          <h1 className="text-5xl font-bold text-red-900">
            ROYAL SPICE FAVORITES
          </h1>
          <p className="mt-8 font-medium text-stone-400 text-xl">
            A collection of some of Royal Spice’s all time favorites! <br /> All
            main dishes are served with FREE yellow rice.
          </p>
        </div>
        <FoodGrid />
      </div>
      <button className="uppercase font-medium mt-24 bg-dark-800  text-light-50 p-4 rounded-full text-sm hover:pointer">
        See all main dishes
      </button>
    </div>
  );
}
