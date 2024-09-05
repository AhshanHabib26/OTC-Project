import { THandleProps } from "@/types/common.type";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const TopBar: React.FC<THandleProps> = ({ handleShowMore }) => {
  return (
    <div>
      <div className="flex items-center justify-between text-white">
        <h1 className="gradient-text text-xl">OTC Live Deals</h1>
        <div className="flex items-center gap-1">
          {handleShowMore ? (
            <p
              onClick={handleShowMore}
              className="gradient-text cursor-pointer"
            >
              View All
            </p>
          ) : (
            <Link href="/items" className="gradient-text">
              View All
            </Link>
          )}
          <FaChevronRight color="#79578b" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
