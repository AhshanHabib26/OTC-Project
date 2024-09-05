const data = [
  {
    id: 1,
    deal_name: "DEAL 03-A",
    type: "LIQUE STARED-DEAL",
    chain: "Ch-111",
    cmc_rank: 100,
    market_cap: "$1,000,000",
    volume: "$100,000",
    status: "Open Deal",
    description:
      "DEAL 03-A, a LIQUE STARED-DEAL, is a unique opportunity for investors who are looking to capitalize on a market that's currently in its early growth stages. This deal is backed by Chain 1, which is known for its robust infrastructure and security features, making it a reliable choice for those who value stability. With a CMC rank of 100, this deal is considered a mid-tier investment, providing a good balance between risk and reward. The market cap is currently at $1,000,000, which shows a healthy but manageable market size. Additionally, the volume of $100,000 indicates active trading, making this a liquid asset. This deal is ideal for investors who are looking for moderate risk with potential for steady returns.",
  },
  {
    id: 2,
    deal_name: "DEAL 03-c",
    type: "HALIQUIDIGCOUNTED DEAL",
    chain: "Ch-002",
    cmc_rank: 120,
    market_cap: "$1,500,000",
    volume: "$150,000",
    description:
      "DEAL 03-c is categorized as a HALIQUIDIGCOUNTED DEAL, offering investors the chance to get in at a discounted price while still reaping the benefits of a well-established blockchain. Chain 2, which supports this deal, is known for its scalability and fast transaction speeds, making it an appealing option for those interested in future-proof technology. With a CMC rank of 120, this deal sits comfortably within the competitive mid-tier range, ensuring both growth potential and stability. The market cap of $1,500,000 reflects a growing interest in this deal, while the $150,000 trading volume suggests consistent liquidity. Investors looking for discounted deals with long-term growth potential will find DEAL 03-c particularly attractive.",
  },
  {
    id: 3,
    deal_name: "DEAL 03-E",
    type: "",
    chain: "Ch-03",
    cmc_rank: 130,
    status: "Open Deal",
    market_cap: "$2,000,000",
    volume: "$200,000",
    description:
      "DEAL 03-E is an exciting opportunity in the blockchain space, supported by Chain 3. While this deal doesn’t have a specific type category, its fundamentals make it a solid investment choice. Chain 3 is recognized for its innovative consensus mechanisms, which offer enhanced security and speed. With a CMC rank of 130, this deal is gaining traction among investors looking for projects with room for upward mobility. The market cap of $2,000,000 signifies a sizable market, and the $200,000 trading volume indicates an active and liquid investment. DEAL 03-E is perfect for investors who want to be part of a project that's on the verge of breaking into a higher market rank.",
  },
  {
    id: 4,
    deal_name: "DEAL 03-G",
    type: "LIQUID VESTED DEAL",
    chain: "Ch-04",
    cmc_rank: 140,
    status: "Open Deal",
    market_cap: "$2,500,000",
    volume: "$250,000",
    description:
      "DEAL 03-G is classified as a LIQUID VESTED DEAL, offering investors both short-term liquidity and long-term vested benefits. Chain 4, which underpins this deal, is widely regarded for its advanced smart contract capabilities, making it a favorite among developers and investors alike. With a CMC rank of 140, this deal is slowly climbing the ranks, showing promising growth potential. The $2,500,000 market cap reflects significant market interest, while the $250,000 trading volume ensures that this deal remains highly liquid. DEAL 03-G is well-suited for investors who want a mix of liquidity and long-term growth potential.",
  },
  {
    id: 5,
    deal_name: "DEAL 03-A",
    type: "LIQUID STARE D",
    chain: "Ch-05",
    cmc_rank: 150,
    market_cap: "$3,000,000",
    volume: "$300,000",
    description:
      "DEAL 03-A (LIQUID STARE D) presents a dynamic investment opportunity for those seeking a reliable blockchain project with liquidity. Supported by Chain 5, this deal offers investors exposure to a project known for its scalability and strong community support. With a CMC rank of 150, DEAL 03-A is gaining recognition in the market, and its $3,000,000 market cap shows that it’s attracting significant capital. The $300,000 trading volume highlights the active market surrounding this deal, making it a good choice for investors who prefer liquid assets that also have strong growth potential.",
  },
  {
    id: 6,
    deal_name: "DEAL 03-A",
    type: "TIQUID STAKED DER",
    chain: "Ch-06",
    cmc_rank: 160,
    market_cap: "$3,500,000",
    volume: "$350,000",
    status: "Open Deal",
    description:
      "DEAL 03-A (TIQUID STAKED DER) offers a compelling opportunity for investors who are looking to stake their assets while maintaining liquidity. Chain 6, the foundation of this deal, is known for its robust staking mechanisms that offer investors rewards for long-term holding. The CMC rank of 160 suggests that this deal is making its way up in the market, offering a mix of growth and security. With a $3,500,000 market cap and $350,000 in volume, this deal is highly liquid and actively traded, making it ideal for those who want to invest in a staked asset without sacrificing liquidity.",
  },
  {
    id: 7,
    deal_name: "DEAL 04-A",
    type: "STARED-DEAL",
    chain: "Ch-07",
    cmc_rank: 170,
    market_cap: "$4,000,000",
    volume: "$400,000",
    status: "Open Deal",
    description:
      "DEAL 04-A is a STARED-DEAL that offers investors a unique opportunity to invest in a blockchain project backed by Chain 7, known for its high throughput and strong security. This deal has a CMC rank of 170, which places it in a competitive position within the mid-tier market. The $4,000,000 market cap reflects growing interest from institutional and retail investors alike, while the $400,000 trading volume ensures that the asset remains liquid. DEAL 04-A is well-suited for investors who are looking for a solid project with a balance of security, liquidity, and growth potential.",
  },
  {
    id: 8,
    deal_name: "DEAL 04-B",
    type: "HALIQUIDIGCOUNTED DEAL",
    chain: "Ch-08",
    cmc_rank: 180,
    market_cap: "$4,500,000",
    volume: "$450,000",
    description:
      "DEAL 04-B is classified as a HALIQUIDIGCOUNTED DEAL, making it a perfect choice for investors looking for a discounted entry into a high-potential blockchain project. Chain 8 supports this deal and is known for its innovative solutions in decentralized finance (DeFi). With a CMC rank of 180, DEAL 04-B is positioned to grow, making it an attractive option for investors who want to get in at an early stage. The $4,500,000 market cap indicates a healthy market size, and the $450,000 trading volume ensures that the deal is liquid and can be traded with ease.",
  },
  {
    id: 9,
    deal_name: "DEAL 04-C",
    type: "VESTED DEAL",
    chain: "Ch-9",
    cmc_rank: 190,
    status: "Open Deal",
    market_cap: "$5,000,000",
    volume: "$500,000",
    description:
      "DEAL 04-C is a VESTED DEAL supported by Chain 9, a blockchain platform known for its innovative use of smart contracts and decentralized applications (dApps). This deal offers a vested investment opportunity, meaning that investors will benefit from long-term holding and potential dividends over time. With a CMC rank of 190, this deal is slowly gaining momentum in the market. The $5,000,000 market cap shows strong backing from investors, and the $500,000 trading volume ensures that it remains a liquid investment. This deal is perfect for those looking to hold for the long term while still having access to liquidity.",
  },
  {
    id: 10,
    deal_name: "DEAL 04-D",
    type: "STARE D",
    chain: "Ch-10",
    cmc_rank: 200,
    market_cap: "$5,500,000",
    volume: "$550,000",
    status: "Open Deal",
    description:
      "DEAL 04-D is a STARE D deal that provides investors with access to a well-established blockchain supported by Chain 10. This chain is recognized for its security protocols and wide adoption across various industries. The CMC rank of 200 indicates that this deal is part of a solid and stable project. With a $5,500,000 market cap and $550,000 trading volume, DEAL 04-D is both well-funded and liquid. Investors who value security and liquidity, while looking for moderate long-term growth, will find this deal highly appealing.",
  },
  {
    id: 11,
    deal_name: "DEAL 04-E",
    type: "STAKED DER",
    chain: "Ch-11",
    cmc_rank: 210,
    market_cap: "$6,000,000",
    volume: "$600,000",
    description:
      "DEAL 04-E is categorized as a STAKED DER deal, offering investors the chance to participate in a staking-based blockchain project. Chain 11, which supports this deal, is known for its staking rewards system, where investors are incentivized to hold their assets for the long term. The CMC rank of 210 places this deal in a competitive market position, and the $6,000,000 market cap indicates a strong backing from investors. With a trading volume of $600,000, this deal offers both liquidity and the opportunity for staking rewards, making it ideal for investors who want passive income along with liquidity.",
  },
  {
    id: 12,
    deal_name: "DEAL 05-A",
    type: "LIQUID DEAL",
    chain: "Ch-12",
    cmc_rank: 220,
    status: "Open Deal",
    market_cap: "$6,500,000",
    volume: "$650,000",
    description:
      "DEAL 05-A, a LIQUID DEAL, presents investors with a highly liquid investment backed by Chain 12, known for its innovative use cases in decentralized applications (dApps). With a CMC rank of 220, this deal is positioned to grow, offering substantial room for capital appreciation. The $6,500,000 market cap indicates strong market interest, and the $650,000 trading volume ensures that this asset remains highly liquid. This deal is ideal for investors who prioritize liquidity but also want to participate in a growing and promising blockchain project.",
  },
  {
    id: 13,
    deal_name: "DEAL 05-B",
    type: "VESTED DEAL",
    chain: "Ch-13",
    cmc_rank: 230,
    status: "Open Deal",
    market_cap: "$7,000,000",
    volume: "$700,000",
    description:
      "DEAL 05-B is a VESTED DEAL, providing investors with a long-term investment opportunity in a blockchain project supported by Chain 13. Known for its innovative consensus mechanism and high transaction speed, Chain 13 ensures that DEAL 05-B is both secure and scalable. The CMC rank of 230 shows that this project is slowly gaining traction in the market. The $7,000,000 market cap and $700,000 trading volume make this deal a highly liquid investment, even while offering the benefits of long-term vesting for those who hold on to their assets.",
  },
  {
    id: 14,
    deal_name: "DEAL 05-C",
    type: "DISCOUNTED DEAL",
    chain: "Ch-14",
    cmc_rank: 240,
    market_cap: "$7,500,000",
    volume: "$750,000",
    status: "Open Deal",
    description:
      "DEAL 05-C is a DISCOUNTED DEAL, making it an attractive option for investors who want to enter at a lower price point while still participating in a high-potential blockchain project. Supported by Chain 14, this deal offers a scalable and secure blockchain solution. The CMC rank of 240 indicates that this deal is gaining traction in the market. With a $7,500,000 market cap and $750,000 trading volume, DEAL 05-C provides both liquidity and growth potential, making it perfect for investors looking for discounted but promising opportunities.",
  },
  {
    id: 15,
    deal_name: "DEAL 05-D",
    type: "LIQUE DEAL",
    chain: "Ch-15",
    cmc_rank: 250,
    market_cap: "$8,000,000",
    volume: "$800,000",
    description:
      "DEAL 05-D is categorized as a LIQUE DEAL, offering investors a highly liquid opportunity in the blockchain space. Supported by Chain 15, known for its robust security features and fast transaction times, this deal is ideal for those who prioritize liquidity and ease of trading. The CMC rank of 250 suggests that this deal is still in its early stages but shows promising growth potential. With an $8,000,000 market cap and $800,000 trading volume, DEAL 05-D offers both liquidity and room for capital appreciation, making it a strong choice for investors who want to balance liquidity with future growth.",
  },
];

export const getAllData = () => {
  return data
}