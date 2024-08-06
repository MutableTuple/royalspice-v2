import Link from "next/link";

export default function SubNavbar() {
  return (
    <div className="mx-20 bg-yellow-400 mt-8 rounded-xl">
      <ul className="flex uppercase font-semibold justify-center gap-8 py-5 text-yellow-900 ">
        <Link href={"/actions/quick-order"}>
          <li className="hover:cursor-pointer hover:text-yellow-700 duration-200 transition-all">
            All dishes
          </li>
        </Link>{" "}
        <Link href={"/product-category/non-veg"}>
          <li className="hover:cursor-pointer hover:text-yellow-700 duration-200 transition-all">
            non-veg
          </li>
        </Link>
        <Link href={"/product-category/veg"}>
          <li className="hover:cursor-pointer hover:text-yellow-700 duration-200 transition-all">
            veg
          </li>
        </Link>
        <Link href={"/product-category/sides"}>
          <li className="hover:cursor-pointer hover:text-yellow-700 duration-200 transition-all">
            sides
          </li>
        </Link>
        <Link href={"/product-category/drinks"}>
          <li className="hover:cursor-pointer hover:text-yellow-700 duration-200 transition-all">
            drinks
          </li>
        </Link>
        <Link href={"/product-category/desserts"}>
          <li className="hover:cursor-pointer hover:text-yellow-700 duration-200 transition-all">
            desserts
          </li>
        </Link>
      </ul>
    </div>
  );
}
