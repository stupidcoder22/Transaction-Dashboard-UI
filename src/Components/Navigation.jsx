import React from "react";

const Navigation = () => {
  return (
    <div className="flex flex-col items-center pt-[12%] w-1/6 h-screen bg-gradient-to-t from-[#B47AFF] via-[#7A96FE] to-[#B47AFF] text-white space-y-10">
      <h1 className="text-3xl font-bold">MONEER</h1>
      <ul className="space-y-6 text-xl">
        <li className="w-full">Dashboard</li>
        <li>Account</li>
        <li>Stats</li>
        <li>Support</li>
      </ul>
    </div>
  );
};

export default Navigation;
