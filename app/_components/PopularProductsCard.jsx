export default function PopularProductsCard() {
  return (
    <div className="flex gap-2 border-b py-2">
      <img
        src="https://royalspice.nl/wp-content/uploads/2024/07/83092873-BA64-4B30-87AC-B8D44BBF0AF0-100x150.jpeg"
        alt="drinks"
        className="h-24 rounded-md"
      />
      <div className="">
        <h2 className="capitalize font-semibold">Onion paratha</h2>
        <p className="text-stone-500">
          &#8364; 1 <sup>.23</sup>
        </p>
      </div>
    </div>
  );
}
