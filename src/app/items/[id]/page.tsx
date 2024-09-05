import Container from "@/app/lib/Container";
import ItemsCard from "@/components/ItemsCard";
import { getAllData } from "@/data/data";
import { TDetailsPageProps, TItem } from "@/types/common.type";
import React from "react";

const DetailsPage: React.FC<TDetailsPageProps> = ({ params }) => {
  const { id } = params;
  const datas: TItem[] = getAllData();
  const data = datas.find((item) => item.id === parseInt(id));

  return (
    <Container>
      <div className="text-gray-400">
        <div>{data ? <ItemsCard data={data} /> : "Something went wrong!"}</div>
      </div>
    </Container>
  );
};

export default DetailsPage;
