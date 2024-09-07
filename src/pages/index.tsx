import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  VStack,
  Container,
  Text,
  Heading,
  Image,
  Flex,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { motion, useAnimation } from "framer-motion";
import { FaEthereum, FaDollarSign } from "react-icons/fa";
import Head from "next/head";
import OrderDetailsModal from "../components/Exchange/OrderBook";
import { sliceAddress } from "@/utils/utlis";
import LoadingAnimation from "@/components/shared/Loading";
import OpenOrderModal from "@/components/Exchange/OrderForm";
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

const HomePage: React.FC = () => {
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

  const fetchAllOrders = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/Orders", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const responseData = await response.json();
        const orders = responseData?.orders || [];
        setOrders(orders);
        console.log("responseData:", orders);
      }
    } catch (error) {
      setOrders([]);
      console.log("Error:", Error);
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
    fetchAllOrders();
  }, []);

  return (
    <>
      <Head>
        <title>Swap321 - P2P Crypto Exchange</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box position="relative" minHeight="100vh" overflow="hidden">
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient="radial(circle at top left, #800080 0%, #4B0082 25%, #191970 50%, #000000 75%)"
          opacity={0.7}
          zIndex={-2}
        />
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxMTEiPjwvcmVjdD4KPC9zdmc+')"
          opacity={0.05}
          zIndex={-1}
        />
        {/* <Header /> */}
        <Container maxW="container.xl" centerContent py={8}>
          <VStack spacing={12} align="center" w="100%">
            <Image
              src="/logo.png"
              alt="Swap321 Logo"
              width={200}
              height={200}
            />
            <VStack spacing={6} textAlign="center">
              <Heading as="h1" size="2xl" color="white">
                SWAP321
              </Heading>
              <Text fontSize="xl" color="gray.300">
                P2P Crypto to Fiat and Fiat to Crypto Exchange
              </Text>
            </VStack>
            <Box w="100%" maxW="3xl" textAlign="center">
              <Text fontSize="5xl" fontWeight="bold" color="white" mb={4}>
                {`$${Number(totalVolume).toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })} USD`}
              </Text>
              <Text fontSize="md" color="gray.400">
                Total trading volume across all markets
              </Text>
            </Box>
          </VStack>
        </Container>
        <VStack
          ref={ordersRef}
          spacing={4}
          w="100%"
          maxW="2xl"
          mx="auto"
          pb="100px"
        >
          <Text fontSize="xl" fontWeight="bold" color="gray.300">
            Live Orders
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
        <Footer />
      </Box>
      <OrderDetailsModal
        isOpen={isOpen}
        onClose={onClose}
        order={selectedOrder}
      />
    </>
  );
};

export default HomePage;
