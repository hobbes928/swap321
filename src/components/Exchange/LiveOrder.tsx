import React, { useEffect, useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { FaEthereum, FaDollarSign } from "react-icons/fa";
import { sliceAddress } from "@/utils/utlis";
import { fetchEthPrice } from "@/utils/fetchETHprice";
import { IOrder } from "../../../lib/database/orders";

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
  const [isInProgress, setIsInProgress] = useState(false);

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
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      if (
        parsedUser?.email != order?.buyer_email &&
        parsedUser?.email != order?.seller_email
      ) {
        if (order?.status === "in-progress") {
          setIsInProgress(true);
        }
      }
    }
  }, [order]);
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.2, delay: index * 0.03 }}
      whileHover={
        !isInProgress
          ? {
              scale: 1.05,
              boxShadow: "0px 0px 8px rgba(255,255,255,0.2)",
            }
          : {}
      }
      bg={isInProgress ? "rgba(0, 255, 0, 0.2)" : "rgba(60, 60, 60, 0.6)"}
      p={4}
      borderRadius="md"
      w="100%"
      cursor={isInProgress ? "default" : "pointer"}
      onClick={isInProgress ? undefined : onClick}
      position="relative"
      overflow="hidden"
    >
      {isInProgress && (
        <MotionBox
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 255, 0, 0.3)"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
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

export default LiveOrder;
