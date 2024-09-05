"use client"

import ItemsCard from "@/components/ItemsCard";
import TopBar from "@/components/TopBar";
import { getAllData } from "@/data/data";
import { TItem } from "@/types/common.type";
import React, { useState } from "react";

const ItemsPage = () => {
  const datas = getAllData(); 
  const [showAll, setShowAll] = useState(false);

 
  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  const itemToShow = showAll ? datas : datas.slice(0, 6);

  return (
    <div>
      <TopBar handleShowMore={handleShowMore} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
        {itemToShow.map((data: TItem) => (
          <ItemsCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
