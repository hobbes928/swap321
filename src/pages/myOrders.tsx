import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  VStack,
  Text,
  Flex,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { FaEthereum, FaDollarSign } from "react-icons/fa";
import OrderDetailsModal from "../components/Exchange/OrderBook";
import { sliceAddress } from "@/utils/utlis";
import LoadingAnimation from "@/components/shared/Loading";
import { IOrder } from "../../lib/database/orders";
import { fetchEthPrice } from "@/utils/fetchETHprice";

const MotionBox = motion(Box);

const LiveOrder: React.FC<{
  index: number;
  order: IOrder;
  onClick: () => void;
}> = ({ index, order, onClick }) => {
  const time = new Date().toLocaleString();
  const isCryptoToFiat = order?.currency === "ETH_TO_USD";
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const [ethPrice, setEthPrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const [ethPriceResponse] = await Promise.all([fetchEthPrice()]);
        setEthPrice(Number(ethPriceResponse));
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    fetchPrices();
  }, []);

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.2, delay: index * 0.03 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 8px rgba(255,255,255,0.2)",
      }}
      bg="rgba(60, 60, 60, 0.6)"
      p={4}
      borderRadius="md"
      w="100%"
      cursor="pointer"
      onClick={onClick}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text>{index + 1}</Text>
        <Text>{sliceAddress(order?.seller_address)}</Text>
        <Flex alignItems="center">
          {isCryptoToFiat ? (
            <>
              <FaEthereum color="#00FFFF" />
              <Text ml={2} mr={2}>
                {order?.amount} ETH ⇔ $
                {((Number(order?.amount) || 0) * (ethPrice || 0)).toFixed(2)}{" "}
                USD
              </Text>
              <FaDollarSign color="#00FF00" />
            </>
          ) : (
            <>
              <FaDollarSign color="#00FF00" />
              <Text ml={2} mr={2}>
                ${order?.amount} USD ⇔{" "}
                {((Number(order?.amount) || 0) * (ethPrice || 0)).toFixed(2)}{" "}
                ETH
              </Text>
              <FaEthereum color="#00FFFF" />
            </>
          )}
        </Flex>
        <Text>{time}</Text>
      </Flex>
    </MotionBox>
  );
};

const MyOrders: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const ordersRef = useRef<HTMLDivElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalVolume, setTotalVolume] = useState(0);
  const toast = useToast();

  const handleOrderClick = (order: any) => {
    setSelectedOrder(order);

    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      return toast({
        title: "User information or provider not found. Please sign in again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    onOpen();
  };

  const fetchAllMyOrders = async () => {
    setIsLoading(true);

    try {
      const storedUser = localStorage.getItem("user");

      if (!storedUser) {
        return toast({
          title:
            "User information or provider not found. Please sign in again.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }

      const parsedUser = JSON.parse(storedUser);

      const data = {
        seller_email: parsedUser?.email,
        getMyOrders: true,
      };

      const response = await fetch("/api/Orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const responseData = await response.json();
        const orders = responseData?.orders;
        setOrders(orders);
        console.log("responseData:", orders);
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  interface GlobalData {
    data: {
      total_volume: {
        usd: number;
      };
    };
  }

  // API route to fetch total trading volume
  const fetchTotalVolume = async () => {
    try {
      const response = await fetch("https://api.coingecko.com/api/v3/global");
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      const data: GlobalData = await response.json();
      const totalVolume = data.data.total_volume.usd;
      setTotalVolume(totalVolume);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTotalVolume();
    fetchAllMyOrders();
  }, []);

  return (
    <>
      <Box position="relative" minHeight="100vh" overflow="hidden">
        <VStack
          ref={ordersRef}
          spacing={4}
          w="100%"
          maxW="2xl"
          mx="auto"
          pb="100px"
        >
          <Text fontSize="xl" fontWeight="bold" color="gray.300">
            My Orders
          </Text>
          {isLoading && <LoadingAnimation />}

          {!isLoading &&
            (orders.length > 0 ? (
              orders.map((order, index) => (
                <LiveOrder
                  key={index}
                  index={index}
                  order={order}
                  onClick={() => handleOrderClick(order)}
                />
              ))
            ) : (
              <Text>There is no open order.</Text>
            ))}
        </VStack>
      </Box>
      <OrderDetailsModal
        isOpen={isOpen}
        onClose={onClose}
        order={selectedOrder}
      />
    </>
  );
};

export default MyOrders;
