import Navbar from "../_components/Navbar";

export default function page() {
  return (
    <div className="">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-8 mx-20 gap-24 ">
        <div className="  md:col-start-1 md:col-end-6 md: mt-72 ">
          <h1 className="text-2xl font-semibold">Send us a Message</h1>
          <p className="text-lg font-normal text-stone-500 mt-4 ">
            If you have any questions whatsoever please feel free to reach out
            to us on info@royalspice.nl. We will always be happy to hear from
            you!
          </p>
        </div>
        <div className="flex flex-col gap-8 md: mt-72 md:col-start-6 md:col-end-8">
          <div>
            <h1 className="text-2xl font-semibold "> Contact Royal Spice</h1>
            <ul className="mt-4 text-stone-500 mt-4">
              <li> Base location: Heusden</li>
              <li> Phone: 0416 851 891 </li>
              <li>Email: info@royalspice.nl</li>
            </ul>
          </div>
          <div className="border border-1 p-4">
            <h1 className="text-xl font-semibold "> Delivery hours</h1>
            <ul className="mt-4 text-stone-500 mt-4">
              <li>Mon : CLOSED</li>
              <li>Tue – Sun : 16:00 – 21:00</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
