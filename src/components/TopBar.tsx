import React from "react";
import { FaChevronRight } from "react-icons/fa";

const TopBar = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center justify-between text-white">
        <h1 className="gradient-text text-xl">OTC Live Deals</h1>
        <div className="flex items-center gap-1 ">
          <p className="gradient-text">View All</p>
          <FaChevronRight color="#79578b" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
