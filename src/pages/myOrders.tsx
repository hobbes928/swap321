import React, { useRef, useEffect, useState } from "react";
import { Box, VStack, Text, useDisclosure, useToast } from "@chakra-ui/react";
import OrderDetailsModal from "../components/Exchange/OrderBook";
import LoadingAnimation from "@/components/shared/Loading";
import LiveOrder from "@/components/Exchange/LiveOrder";

const MyOrders: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const ordersRef = useRef<HTMLDivElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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

  useEffect(() => {
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
