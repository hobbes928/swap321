import { useState, useEffect, useMemo } from "react";
import { Box, Text, HStack } from "@chakra-ui/react";
import { IOrder } from "../../../lib/database/orders";
import { fetchEthPrice, fetchUsdEthPrice } from "@/utils/fetchETHprice";

interface OrderInfoCardProps {
  orderDetails: IOrder | undefined;
}

const OrderInfoCard: React.FC<OrderInfoCardProps> = ({ orderDetails }) => {
  const [ethPrice, setEthPrice] = useState<string | null>(null);
  const [usdPrice, setUsdPrice] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const [ethPriceResponse, usdPriceResponse] = await Promise.all([
          fetchEthPrice(),
          fetchUsdEthPrice(),
        ]);
        setEthPrice(ethPriceResponse);
        setUsdPrice(usdPriceResponse);
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    fetchPrices();
  }, []);

  const amount = useMemo(
    () => (orderDetails ? Number(orderDetails.amount) : 0),
    [orderDetails]
  );

  const receiveAmount = useMemo(() => {
    if (!ethPrice || !usdPrice || amount === 0) return null;

    return orderDetails?.currency === "ETH_TO_USD"
      ? `$${(amount * Number(ethPrice)).toFixed(2)}`
      : `${(amount * Number(usdPrice)).toFixed(6)} ETH`;
  }, [ethPrice, usdPrice, amount, orderDetails]);

  if (!orderDetails) return null;

  const priceDisplay = useMemo(() => {
    if (orderDetails.currency === "USD_TO_ETH" && usdPrice) {
      return `${usdPrice} ETH`;
    }
    return ethPrice ? `$${ethPrice}` : "Loading...";
  }, [ethPrice, usdPrice, orderDetails.currency]);

  return (
    <Box>
      <HStack mb={2}>
        <Box bg="yellow.400" color="black" px={2} py={1} borderRadius="full">
          1
        </Box>
        <Text fontWeight="bold">Confirm Order Info</Text>
      </HStack>
      <Box bg="gray.800" p={4} borderRadius="md">
        <HStack justify="space-between">
          <Text color="gray.400">
            {orderDetails.currency === "ETH_TO_USD"
              ? "ETH Amount"
              : "USD Amount"}
          </Text>
          <Text>
            {orderDetails.currency === "ETH_TO_USD"
              ? `${amount} ETH`
              : `$${amount}`}
          </Text>
        </HStack>
        <HStack justify="space-between">
          <Text color="gray.400">Price</Text>
          <Text>{priceDisplay}</Text>
        </HStack>
        <HStack justify="space-between">
          <Text color="gray.400">
            {orderDetails.currency === "ETH_TO_USD"
              ? "Receive USD"
              : "Receive ETH"}
          </Text>
          <Text>{receiveAmount ?? "Calculating..."}</Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default OrderInfoCard;
