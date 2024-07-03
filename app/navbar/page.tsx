import { MdKeyboardArrowLeft } from "react-icons/md";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center px-4 py-2 bg-slate-50 text-black font-bold border-b-2 h-[7vh]">
        <div className="mr-4 w-[20vw]">
          <a href="/">
            <MdKeyboardArrowLeft className="text-2xl items-start" />
          </a>
        </div>
        <span className="font-bold content-center">Select pickup location</span>
      </div>
    </>
  );
}
