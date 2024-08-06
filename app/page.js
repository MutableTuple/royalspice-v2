"use client";

import { useState } from "react";
import Header from "./_components/Header";
import RSF from "./_components/RSF";
import Search from "./_components/Search";
import DeliveryRegions from "./_components/DeliveryRegions";
import GreatSides from "./_components/GreatSides";
import Info from "./_components/Info";
import LRSP from "./_components/LRSP";
export default function Page() {
  const [isVisbleSearch, setisVisibleSearch] = useState(false);
  return (
    <div className="">
      {isVisbleSearch && <Search setisVisibleSearch={setisVisibleSearch} />}
      <Header setisVisibleSearch={setisVisibleSearch} />
      <RSF />
      <DeliveryRegions />
      <GreatSides />
      <Info />
      <LRSP />
    </div>
  );
}
