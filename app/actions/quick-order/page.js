import Categories from "@/app/_components/Categories";
import FoodCard2 from "@/app/_components/FoodCard2";
import PopularProducts from "@/app/_components/PopularProducts";
import Slider from "@/app/_components/Slider";

export default function Page() {
  return (
    <div className="h-auto w-full lg:grid-cols-6 grid grid-cols-1">
      {/* For large screens, display Categories and Popular Products first */}
      <div className="hidden lg:block w-4/6 lg:col-start-1 lg:col-end-3">
        <h1 className="uppercase font-semibold text-xl relative after:content-[''] after:block after:w-[60px] after:h-[3px] after:bg-red-600 after:mt-1 lg:mb-9">
          CATEGORIES
        </h1>
        <Categories />
        <br />
        <br />
        <h1 className="uppercase font-semibold text-xl relative after:content-[''] after:block after:w-[60px] after:h-[3px] after:bg-red-600 after:mt-1">
          Popular products
        </h1>
        <PopularProducts />
      </div>
      {/* For all screens, display Food Cards first */}
      <div className="w-6/6 lg:col-start-3 lg:col-end-7">
        <div className="flex flex-col w-full">
          <Slider>
            <div className="h-56 bg-gray-300 flex items-center justify-center">
              SLIDE 1
            </div>
            <div className="h-56 bg-gray-400 flex items-center justify-center">
              SLIDE 2
            </div>
            <div className="h-56 bg-gray-500 flex items-center justify-center">
              SLIDE 3
            </div>
            {/* Add more slides as needed */}
          </Slider>
          <div className="flex flex-col gap-4">
            <FoodCard2 />
          </div>
        </div>
      </div>
      {/* For small screens, display Categories and Popular Products at the end */}
      <div className="lg:hidden w-4/6">
        <h1 className="uppercase font-semibold text-xl relative after:content-[''] after:block after:w-[60px] after:h-[3px] after:bg-red-600 after:mt-1 lg:mb-9">
          CATEGORIES
        </h1>
        <Categories />
        <br />
        <br />
        <h1 className="uppercase font-semibold text-xl relative after:content-[''] after:block after:w-[60px] after:h-[3px] after:bg-red-600 after:mt-1">
          Popular products
        </h1>
        <PopularProducts />
      </div>
    </div>
  );
}
