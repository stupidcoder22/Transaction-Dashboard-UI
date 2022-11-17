import React from "react";

const Transaction = (props) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col space-y-2">
        <p className="font-semibold">Bank Transfer</p>
        <p className="text-blue-600 cursor-pointer">View Details</p>
      </div>
      <p>Friday, 27th</p>
    </div>
  );
};

export default Transaction;
