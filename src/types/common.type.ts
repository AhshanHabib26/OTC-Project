export type TItem = {
  id: number;
  deal_name: string;
  type: string;
  chain: string;
  status?: string;
  cmc_rank: number;
  market_cap: string;
  volume: string;
  description: string;
};

export type TItemProps = {
  data: TItem;
};

export type THandleProps = {
  handleShowMore?: () => void;
};

export type TDetailsPageProps = {
  params: {
    id: string;
  };
};
