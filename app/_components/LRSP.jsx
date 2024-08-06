import Link from "next/link";
import React from "react";
import { BiDish } from "react-icons/bi";
export default function LRSP() {
  return (
    <div className="bg-yellow-400 px-20 py-20 flex items-center justify-center">
      <div className="absolute ">
        <div className="relative bg-yellow-400 p-4 rounded-full   -translate-y-28">
          <BiDish size={100} color="#95601C" />
        </div>
      </div>
      <div className="mt-8">
        <h1 className="font-bold text-stone-800 text-3xl">Love Royal Spice?</h1>
        <br />
        <p>
          Click{" "}
          <Link
            target="_blank"
            rel="noreferrer"
            className="text-red-700"
            href={
              "https://www.google.com/maps/place//data=!4m3!3m2!1s0x47c6936b97537491:0xb7dac90f2713b419!12e1?source=g.page.m.dd._&laa=lu-desktop-reviews-dialog-review-solicitation"
            }
          >
            here{" "}
          </Link>
          to place a Google review.
        </p>
      </div>
    </div>
  );
}
