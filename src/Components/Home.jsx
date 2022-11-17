import React from "react";
import Doughchart from "./Doughchart";
import LineChart from "../Components/LineChart";
import Verticalbar from "./Verticalbar";
import Sidebar from "./Sidebar";
import { AiOutlineDown } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

const Home = () => {
  return (
    <div className="w-5/6 max-h-screen px-8 pt-8 space-y-6 bg-[#F3F2FF]">
      <div className="flex justify-between space-x-1 text-xl">
        <div className="flex w-2/3">
          <span className="font-semibold">Hello, </span>
          <h1>&nbsp;Prateek Singh</h1>
        </div>
        <div className="flex w-1/3 justify-between">
          <IoIosNotifications />
          <FiSearch className="mr-4" />
        </div>
      </div>
      <div className="flex space-x-8">
        <div className="w-2/3 space-y-5">
          <div className="text-white py-3 px-5 bg-gradient-to-r from-[#7A96FE]  to-[#B47AFF] rounded-3xl space-y-5">
            <h1 className="text-2xl">Balance</h1>
            <h1 className="text-4xl font-bold">$ 20,000</h1>
            <h1 className="text-lg font-semibold">
              Your account number 0077-2232-3320-4450
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-2xl">
              <div className="flex items-center space-x-28">
                <h1 className="text-3xl font-semibold">Stats</h1>
                <div className="flex items-center space-x-1 cursor-pointer">
                  <p>Last Week</p>
                  <AiOutlineDown />
                </div>
              </div>
              <div className="flex items-center justify-around">
                <div className="">
                  <h1>Payment</h1>
                  <span className="text-2xl font-semibold">75%</span>
                  <h1>Transfer</h1>
                  <span className="text-2xl font-semibold">24%</span>
                </div>
                <Doughchart className="bg-slate-600" />
              </div>
            </div>
            <div className=" bg-white p-4 rounded-2xl">
              <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">+30,000</h1>
                <div className="flex items-center space-x-1 cursor-pointer">
                  <p>Last Week</p>
                  <AiOutlineDown />
                </div>
              </div>
              <LineChart />
            </div>
            <div className="bg-white p-4 rounded-2xl">
              <div className="flex  items-center justify-between ">
                <h1 className="text-3xl font-semibold">Analytics</h1>
                <div className="flex items-center space-x-1 cursor-pointer">
                  <p>Last Week</p>
                  <AiOutlineDown />
                </div>
              </div>
              <Verticalbar />
            </div>
            <div className="bg-white rounded-2xl flex flex-col items-center justify-center space-y-4">
              <p className="text-black text-2xl text-center">
                Safely withdraw your money anywhere
              </p>
              <button className="px-4 py-2  border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white rounded-md">
                Withdraw
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/3 bg-white rounded-2xl">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
