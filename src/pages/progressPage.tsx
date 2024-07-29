import React from "react";
import Navbar from "../components/navbar/navbar";
import ProgressModel from "../components/progressModel/progressModel";
const ProgressPage = () => {
  return (
    <div className="flex   w-full ">
      <div className="w-[15%]">
        <Navbar />
      </div>
      <div className="w-[85%]  bg-[#e7e7e7]">
        <div className="px-5 py-6 w-full">
          <div>
            <ProgressModel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
