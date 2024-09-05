import Container from "@/app/lib/Container";
import ItemsCard from "@/components/ItemsCard";
import TopBar from "@/components/TopBar";
import { getAllData } from "@/data/data";
import { TDetailsPageProps, TItem } from "@/types/common.type";
import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTelegram, FaDiscord, FaLinkedin, FaMedium } from "react-icons/fa";
import { MdToken } from "react-icons/md";
import { SiJsonwebtokens } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";

const sclData = [
  {
    icons: SiJsonwebtokens,
    title: "Tokenomics",
    color: "#993F76",
  },
  {
    icons: MdToken,
    title: "Pitch Deck",
    color: "#993F76",
  },
  {
    icons: TbWorldWww,
    title: "Website",
    color: "#1D78C9",
  },
  {
    icons: FaTelegram,
    title: "Telegram",
    color: "#29B6F6",
  },
  {
    icons: AiFillTwitterCircle,
    title: "Twitter",
    color: "#03A9F4",
  },
  {
    icons: FaMedium,
    title: "Medium",
    color: "#2E8BD9",
  },
  {
    icons: FaLinkedin,
    title: "Linkedin",
    color: "#0288D1",
  },
  {
    icons: FaDiscord,
    title: "Discord",
    color: "#536DFE",
  },
];

const DetailsPage: React.FC<TDetailsPageProps> = ({ params }) => {
  const { id } = params;
  const datas: TItem[] = getAllData();
  const data = datas.find((item) => item.id === parseInt(id));

  return (
    <Container>
      <div className="text-gray-400 max-w-5xl mx-auto">
        <TopBar />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          <div>
            {data ? <ItemsCard data={data} /> : "Something went wrong!"}
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            {sclData.map((s, index) => (
              <div
                key={index}
                className="flex items-center gap-2 gradient-border px-4 py-2"
              >
                <s.icons size={24} color={s.color} /> <span>{s.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="my-5">
          <h1 className="text-xl text-white font-semibold">Blurb</h1>
          <p className="text-md text-justify ml-5 mt-4">{data?.description}</p>
        </div>
        <div className="flex items-center justify-between ml-5 gap-5">
          <button className="gradient-border w-full py-2 text-lg gradient-text">
            Contact Willian
          </button>
          <button className="gradient-border w-full py-2 text-lg gradient-text">
            Contact Borea
          </button>
        </div>
      </div>
    </Container>
  );
};

export default DetailsPage;
