import { TiHome } from "react-icons/ti";
import { IoSearchSharp } from "react-icons/io5";
import { FiBook } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";

export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5"
        >
          <TiHome className="text-xl" />
          <span className="text-base text-black">Home</span>
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 "
        >
          <IoSearchSharp className="text-xl" />
          <span className="text-base text-black">Search</span>
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 "
        >
          <FiBook className="text-xl" />
          <span className="text-base text-black">Bookin</span>
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 "
        >
          <IoMdSettings className="text-xl" />
          <span className="text-base text-black ">Setting</span>
        </button>
      </div>
    </div>
  );
}
