import ItemsCard from "@/components/ItemsCard";
import TopBar from "@/components/TopBar";
import { getAllData } from "@/data/data";
import { TItem } from "@/types/common.type";
import React from "react";

const ItemsPage = () => {
  const datas = getAllData();

  return (
    <div className="mt-5">
      <TopBar />
      <div>
        {datas.slice(0, 6).map((data: TItem) => (
          <ItemsCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
