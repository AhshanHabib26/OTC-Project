import { TItemProps } from "@/types/common.type";
import React from "react";
import userImg from "../assets/user-avatar.png";
import Image from "next/image";

const ItemsCard: React.FC<TItemProps> = ({ data }) => {
  return (
    <div className="gradient-border  p-3 text-gray-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={userImg}
            alt={data.deal_name}
            className="w-[50px] rounded-full border border-gray-600"
          />
          <div>
            <h1 className="text-lg font-medium">{data.deal_name}</h1>
            <span className="text-sm font-thin text-[#79578b]">
              {data.type}
            </span>
          </div>
        </div>
        <div>
          {data.status && (
            <p className="text-sm text-orange-500 max-w-[5ch] block">
              {data.status}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div>
          <h1 className="text-lg font-light">Chain</h1>
          <span className="text-sm text-orange-500">{data.chain}</span>
        </div>
        <div>
          <h1 className="text-lg font-light">CMC Rank</h1>
          <span className="flex items-end justify-end text-sm text-orange-500">
            {data.cmc_rank}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div>
          <h1 className="text-lg font-light">Market Cap</h1>
          <span className="text-sm text-orange-500">{data.market_cap}</span>
        </div>
        <div>
          <h1 className="text-lg font-light">Volume</h1>
          <span className="flex items-end justify-end text-sm text-orange-500">
            {data.volume}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
