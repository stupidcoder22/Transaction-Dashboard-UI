import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import Transaction from "./Transaction";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center mt-8 space-y-4">
      <h1 className="text-2xl font-bold text-gray-700">My Profile</h1>
      <div className="w-2/6 pt-2 object-fill bg-[#B47AFF] flex justify-center rounded-2xl">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"
          alt=""
          className="w-4/6"
        />
      </div>
      <div className="">
        <h1 className="font-semibold text-lg">Prateek Singh</h1>
        <div className="flex items-center">
          <h1 className="text-gray-400">Pro Accountant</h1>
          <AiFillCheckCircle color="blue" />
        </div>
      </div>
      <div className="flex space-x-4 ">
        <div className="px-2 py-2 text-blue-600 border-blue-600 border-2 flex items-center hover:bg-blue-600 hover:text-white rounded-md cursor-pointer">
          <MdModeEditOutline className="" />
        </div>
        <div className="py-2 px-2  border-2  border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white rounded-md cursor-pointer">
          <h1>View Full Profile</h1>
        </div>
      </div>
      <hr class="my-16 bg-gray-300 h-px border-1 w-[80%]" />
      <div className="space-y-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          Your last transaction
        </h1>
        <Transaction />
        <Transaction />
        <Transaction />
      </div>
    </div>
  );
};

export default Sidebar;
