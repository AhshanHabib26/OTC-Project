import ItemsCard from "@/components/ItemsCard";
import TopBar from "@/components/TopBar";
import { getAllData } from "@/data/data";
import { TItem } from "@/types/common.type";
import React from "react";

const ItemsPage = () => {
  const datas = getAllData();

  return (
    <div className="mt-10">
      <TopBar />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
        {datas.slice(0, 6).map((data: TItem) => (
          <ItemsCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
