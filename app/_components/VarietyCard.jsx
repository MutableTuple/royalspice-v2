export default function VarietyCard({ image, name }) {
  return (
    <div className="relative text-center">
      <img src={image} alt={image.src} className="lg:h-44 h-auto" />
      <h2 className="font-medium text-sm  uppercase"> {name}</h2>

      <div className=""></div>
    </div>
  );
}
