import { FaTaxi } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaPeopleArrows } from "react-icons/fa";

export default function Booking() {
  return (
    <>
      <div className="bg-blue-200 mx-5 mt-5 mb-5 h-[74vh]">
        <div className="h-[25vh]">
          <div className="flex justify-center">
            <FaTaxi className="mx-4 mt-4 text-2xl" />
            <h1 className="font-bold mt-4 text-2xl">Booking</h1>
          </div>
          <div>
            <p className="text-base text-center">
              Your taxi booking request has been confirmed!
            </p>
          </div>
        </div>
        <div className="mx-4 h-[20vh]">
          <h1 className="font-bold text-xl ">Taxi Details</h1>
          <div className="flex items-center mt-4">
            <BsCalendarDateFill className="text-[1.5rem]" />
            <div className="flex flex-col">
              <p className="text-[1rem] mx-2">
                Pickup:2:00pm - Drop-off:2:30pm
              </p>
              <p className="text-[1rem] mx-2">January 27,2023</p>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <FaPeopleArrows className="text-[1.5rem]" />
            <div className="flex flex-col">
              <p className="text-[1rem] mx-2">
                Driver: John Dan Licence ABC123
              </p>
              <p className="text-[1rem] mx-2">Molndal Swedan</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 place-items-center mx-4 mt-10 h-[20vh]">
          <button className="bg-blue-500 text-white font-bold py-2 mt-10 w-11/12 ">
            <a href="" className="text-sm">
              Add to calender
            </a>
          </button>
          <button className="bg-blue-500 text-white font-bold py-2 mt-10 w-11/12">
            <a href="" className="text-sm">
              Show booking
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
