"use client";

import Navbar from "@/app/_components/Navbar";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(1);
  return (
    <div className="">
      <Navbar />
      <div className="pt-80 px-20 h-dvh relative">
        <div className="grid grid-cols-2 gap-8">
          <div className=" ">
            <img
              src="https://royalspice.nl/wp-content/uploads/2024/01/Cocktail-Samosa-768x1151.jpg"
              alt=""
            />
          </div>
          <div className="relative">
            <div className="fixed flex flex-col gap-8 ">
              <h1 className="text-4xl font-bold">Cocktail Samosa (5 st.)</h1>

              <p className="w-3/4 text-stone-600">
                Cocktail samosa is een kleine, knapperige Indiase snack, gevuld
                met gekruide aardappelen en groenten, perfect voor feestjes en
                wordt geserveerd met chutney. (5 st.)
              </p>

              <span className="font-bold  text-3xl">
                € 4. <sup>95</sup>
              </span>
              <div className=" flex gap-2">
                <span className="px-16 py-4 bg-stone-300 rounded-full flex justify-around max-w-fit">
                  <span
                    onClick={() => setCount(count - 1)}
                    className="hover:cursor-pointer"
                  >
                    -
                  </span>
                  <span className="hover:cursor-pointer">{count}</span>
                  <span
                    className="hover:cursor-pointer"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </span>
                </span>
                <span className="uppercase bg-red-600 font-bold px-16 py-4 rounded-full text-white">
                  order
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
