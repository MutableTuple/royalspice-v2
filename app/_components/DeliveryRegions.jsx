import Link from "next/link";
import React from "react";

export default function DeliveryRegions() {
  return (
    <div className="mt-24 px-20 md:h-lvh md:py-0 py-20 flex flex-col md:flex-row bg-yellow-50 items-center justify-center">
      <div>
        <h1 className="text-5xl font-bold mb-4">
          We deliver to the following regions:
        </h1>
        <p className="text-xl font-semibold text-stone-600">
          Heusden, Drunen, Waalwijk, ‘s-Hertogenbosch and Vlijmen
        </p>
        <Link href="/actions/quick-order">
          <button className="px-6 py-3 rounded-full text-white bg-yellow-400 font-bold uppercase mt-8 hover:bg-stone-900  transition-all duration-300">
            Order now
          </button>
        </Link>
      </div>
      <div>
        {" "}
        <img
          src="https://royalspice.nl/wp-content/uploads/2021/12/scooter.png"
          alt=""
        />
      </div>
      <div className="text-end ">
        {" "}
        <h1 className="text-5xl font-bold mb-8">Free Delivery:</h1>
        <p className="text-xl font-semibold text-stone-600">
          On orders from €40,- and above. For the region ‘s-Hertogenbosch from
          €50,- and above.
        </p>
        <Link href="/actions/quick-order">
          <button className="px-6 py-3 rounded-full text-white bg-yellow-400 font-bold uppercase mt-8 hover:bg-stone-900  transition-all duration-300">
            Order quickly online
          </button>
        </Link>
      </div>
    </div>
  );
}
