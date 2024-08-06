import { MdOutlineCleanHands } from "react-icons/md";
import { LuBookMinus } from "react-icons/lu";
import { GiScooter } from "react-icons/gi";
import { MdOutlineStorefront } from "react-icons/md";

export default function Info() {
  return (
    <div className="bg-yellow-50 px-20 py-20">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
        <div className="flex flex-col items-center gap-4">
          <MdOutlineCleanHands size={84} color="#FFCA3C" />
          <h1 className="font-bold text-lg font-semibold">Hygiene</h1>
          <p className="text-stone-500 text-center">
            We do everything to carry out our preparations{" "}
            <strong> hygienically </strong>. We use gloves and hair nets
            throughout the process.
          </p>
        </div>{" "}
        <div className="flex flex-col items-center gap-4">
          <LuBookMinus size={84} color="#F47513" />
          <h1 className="font-bold text-lg font-semibold">Hygiene</h1>
          <p className="text-stone-500 text-center">
            Enjoy delicious, authentic and original recipes at Royal Spice. Our
            secret ingredient? <strong>Lots of love!</strong>
          </p>
        </div>{" "}
        <div className="flex flex-col items-center gap-4">
          <GiScooter size={84} color="#B50CA4" />
          <h1 className="font-bold text-lg font-semibold">Hygiene</h1>
          <p className="text-stone-500 text-center">
            We try to deliver freshly prepared food as quickly as possible. Our
            average delivery time is <strong> 45-55 minutes. </strong>
          </p>
        </div>{" "}
        <div className="flex flex-col items-center gap-4">
          <MdOutlineStorefront size={84} color="#ED285C" />
          <h1 className="font-bold text-lg font-semibold">Hygiene</h1>
          <p className="text-stone-500 text-center">
            We <strong>only deliver</strong> so you don’t have to worry about a
            thing! Just sit back, relax and enjoy the authentic tastes of India
          </p>
        </div>
      </div>
    </div>
  );
}
