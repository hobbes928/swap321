import { ethers } from "ethers";

// ABI for the AggregatorV3Interface
const aggregatorV3InterfaceABI = [
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint80", name: "_roundId", type: "uint80" }],
    name: "getRoundData",
    outputs: [
      { internalType: "uint80", name: "roundId", type: "uint80" },
      { internalType: "int256", name: "answer", type: "int256" },
      { internalType: "uint256", name: "startedAt", type: "uint256" },
      { internalType: "uint256", name: "updatedAt", type: "uint256" },
      { internalType: "uint80", name: "answeredInRound", type: "uint80" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      { internalType: "uint80", name: "roundId", type: "uint80" },
      { internalType: "int256", name: "answer", type: "int256" },
      { internalType: "uint256", name: "startedAt", type: "uint256" },
      { internalType: "uint256", name: "updatedAt", type: "uint256" },
      { internalType: "uint80", name: "answeredInRound", type: "uint80" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];

// Connect to Ethereum Mainnet using a public provider
const provider = ethers.getDefaultProvider("homestead", {
  infura: process.env.NEXT_PUBLIC_INFURA_API_KEY, // Provide Infura API key
  // You can add other provider options here if needed
});

// Chainlink ETH/USD Price Feed Contract Address
const ethUsdPriceFeedAddress = process.env
  .NEXT_PUBLIC_ethUsdPriceFeedAddress as string;

export async function fetchEthPrice() {
  if (!ethUsdPriceFeedAddress)
    throw new Error("Please provide ethUsdPriceFeedAddress");

  // Instantiate the price feed contract
  const priceFeed = new ethers.Contract(
    ethUsdPriceFeedAddress,
    aggregatorV3InterfaceABI,
    provider
  );

  // Fetch the latest price
  const latestRoundData = await priceFeed.latestRoundData();
  const price = latestRoundData.answer.toString();

  // The price is typically returned with 8 decimal places, so divide by 10^8 to get the actual price
  const ethPrice = ethers.formatUnits(price, 8);

  console.log("Current ETH Price in USD:", ethPrice);

  return ethPrice;
}

export async function fetchUsdEthPrice() {
  if (!ethUsdPriceFeedAddress)
    throw new Error("Please provide ethUsdPriceFeedAddress");

  // Instantiate the price feed contract
  const priceFeed = new ethers.Contract(
    ethUsdPriceFeedAddress,
    aggregatorV3InterfaceABI,
    provider
  );

  // Fetch the latest price

  const latestRoundData = await priceFeed.latestRoundData();
  const ethPriceInUsd = Number(latestRoundData.answer) / 1e8; // Chainlink price feed has 8 decimals

  const usdToEthPrice = (1 / ethPriceInUsd).toFixed(6); // Convert to USD to ETH
  console.log("USD to ETH Price:", usdToEthPrice);

  return usdToEthPrice;
}
