import NavbarComplete from "./NavbarComplete";

export default function Header({ setisVisibleSearch }) {
  return (
    <div className="h-dvh bg-gradient-to-br from-amber-300 to-orange-500">
      <div className="">
        <NavbarComplete setisVisibleSearch={setisVisibleSearch} />
      </div>
      <div></div>
    </div>
  );
}
