import Navbar from "../_components/Navbar";
import NavbarComplete from "../_components/NavbarComplete";
export default function page({ children }) {
  return (
    <div className="">
      <NavbarComplete />
      <div className="z-0 relative">
        <img
          src="https://royalspice.nl/wp-content/uploads/2021/12/indian-curry-2021-08-26-17-06-15-utc-scaled.jpg"
          alt=""
          className="fixed top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 mx-20 md:top-72 top-32 ">
          <p className="z-20 text-gray-50 uppercase mb-8">Home /order online</p>
          <h1 className="md:text-6xl text-4xl uppercase font-bold text-gray-50">
            Order online
          </h1>
          <p className="text-gray-50 font-medium mt-8 text-lg">
            All the dishes come with FREE yellow rice!
          </p>
        </div>
      </div>
      <div className="h-auto relative mt-[32%] z-50 bg-white px-16 py-8">
        {children}
      </div>
    </div>
  );
}
