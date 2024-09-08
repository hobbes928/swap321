import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  VStack,
  Text,
  Button,
  Input,
  useToast,
  HStack,
  Container,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import { IOrder } from "../../../lib/database/orders";
import OrderInfoCard from "./OrderInfoCard";
import OpenOrderModal from "./OrderForm";
import { ethers } from "ethers";
import { useGeneralStore, GeneralProps } from "@/hooks/useGeneral";
import ChatBox from "./ChatBox";
import { useXmtp } from "@/hooks/useXmtp";

import { escrowContractFunction } from "@/utils/utlis";

const MotionBox = motion(Box);
interface SellerOrderExecutionProps {
  orderDetails: IOrder | undefined;
}

const SellerOrderExecution: React.FC<SellerOrderExecutionProps> = ({
  orderDetails,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { client, isInitialized } = useXmtp();

  const [confirmed, setConfirmed] = useState(false);
  const [escrowStarted, setEscrowStarted] = useState(false);
  const [escrowReleased, setEscrowReleased] = useState(false);
  const [escrowReturned, setEscrowReturned] = useState(false);

  const toast = useToast();
  let toastLoading: any;

  const web3authProvider = useGeneralStore(
    (state: GeneralProps) => state.web3AuthProvider
  );
  const startTransaction = async () => {
    if (!web3authProvider) {
      throw new Error("Failed to connect to Web3Auth");
    }
    const contract = await escrowContractFunction(web3authProvider.provider);

    if (contract && orderDetails) {
      const buyerAddress = orderDetails.buyer_address as string;
      await startEscrow(contract, buyerAddress);
    } else {
      console.error("Failed to initialize contract");
      // Optionally, show an error toast here
    }
  };
  const [confirming, setConfirming] = useState(false);
  const startEscrow = async (
    contract: ethers.Contract,
    buyerAddress: string
  ) => {
    try {
      // Convert the amount to wei
      setConfirming(true);

      toastLoading = toast({
        title: "Confirm & Deposit",
        description: "Confirming & Depositting, Please wait...",
        status: "loading",
        duration: null,
      });
      const amountInWei = ethers.parseEther(orderDetails?.amount || "0");

      const tx = await contract.startEscrow(
        buyerAddress,
        amountInWei,
        orderDetails?._id || "0",
        {
          value: amountInWei,
        }
      );

      await tx.wait();
      toast.close(toastLoading);

      toast({
        title: "Confirm & Deposit",
        description: "Confirmed & Deposited",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setEscrowStarted(true);

      const escrow_id = await contract.getEscrowIdByOrderId(orderDetails?._id);
      console.log("escrow_id:", escrow_id);

      handleUpdatingOrder(Number(escrow_id));
      console.log("Escrow started successfully");
      toast({
        title: "Confirm & Deposit",
        description: "Escrow started successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error: any) {
      console.error("Failed to start escrow:", error);
      toast({
        title: "Failed to start escrow",
        description: error?.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      toast.close(toastLoading);
      setConfirming(false);
    }
  };

  const handleUpdatingOrder = async (escrow_id = 0) => {
    if (!orderDetails) return;

    try {
      const data = {
        ...orderDetails,
        escrow_id: escrow_id,
        updated_at: Date.now(),
      };

      const response = await fetch("/api/Orders", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response && response.ok) {
        console.log("Order updated successfully!");
      } else {
        console.error("Failed to update order");
      }
    } catch (error) {
      console.error("Error updating order:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (orderDetails) {
      setBuyerAddress(orderDetails.buyer_address as string);
      setConfirmed(orderDetails.escrow_id > 0);
      setEscrowStarted(orderDetails.escrow_id > 0);
      if (orderDetails.status === "completed") {
        setEscrowReleased(true);
      } else if (orderDetails.status === "failed") {
        setEscrowReturned(true);
      }
    }
  }, [orderDetails]);
  const [buyerAddress, setBuyerAddress] = useState("");

  if (!orderDetails) return null;

  useEffect(() => {
    if (orderDetails && orderDetails.status === "completed") {
      setEscrowReleased(true);
    }
  }, [orderDetails]);

  return (
    <>
      <Head>
        <title>Execute Order - Swap321</title>
      </Head>
      <Box minHeight="100vh" bg="black" color="white">
        <Container maxW="container.xl" pt="70px">
          <Flex direction="column">
            <HStack
              p={4}
              borderBottom="1px solid"
              borderColor="gray.700"
              justify={"space-between"}
            >
              <Box>
                <Text fontSize="2xl" fontWeight="bold">
                  Verify Payment
                </Text>
                <Text color="gray.400">
                  Please confirm that you have{" "}
                  {orderDetails.currency === "ETH_TO_USD"
                    ? "received payment."
                    : "sent the cryptocurrency."}
                </Text>
              </Box>
              <Box>
                <Button variant="outline" onClick={() => onOpen()}>
                  Edit Order
                </Button>
              </Box>
            </HStack>
            <Flex>
              <Box
                flex={2}
                p={6}
                borderRight="1px solid"
                borderColor="gray.700"
              >
                <VStack align="stretch" spacing={8}>
                  {/* Step 1: Confirm & Deposit */}
                  <Box>
                    <OrderInfoCard orderDetails={orderDetails} />
                    <Box mt={4}>
                      {buyerAddress ? (
                        escrowStarted || confirmed ? (
                          <Text fontWeight="bold" color="green.500">
                            Confirmed and Deposited
                          </Text>
                        ) : (
                          <Button
                            onClick={() => startTransaction()}
                            colorScheme="purple"
                            width="full"
                            disabled={confirming}
                          >
                            {confirming ? "Processing..." : "Confirm & Deposit"}
                          </Button>
                        )
                      ) : (
                        <p>Wait for buyer to confirm the order</p>
                      )}
                    </Box>
                  </Box>

                  {/* Step 2: Awaiting Seller Payment Verification */}
                  <Box>
                    <HStack mb={2}>
                      <Box
                        bg="yellow.400"
                        color="black"
                        px={2}
                        py={1}
                        borderRadius="full"
                      >
                        2
                      </Box>
                      <Text fontWeight="bold">
                        {escrowReleased
                          ? "Transaction Successful: Escrow Released"
                          : escrowReturned
                          ? "Transaction Failed: Escrow Funds Returned"
                          : "Awaiting Seller Payment Verification"}
                      </Text>
                    </HStack>
                    {escrowReleased && (
                      <Text fontWeight="bold" color="green.500">
                        Transaction Successful: Escrow Released
                      </Text>
                    )}
                    {escrowReturned && (
                      <Text fontWeight="bold" color="red.500">
                        Transaction Failed: Escrow Funds Returned
                      </Text>
                    )}
                  </Box>
                </VStack>
              </Box>
              <VStack flex={1} p={6} align="stretch" spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Chat with Buyer
                </Text>
                {isInitialized &&
                orderDetails?.buyer_address &&
                orderDetails?._id ? (
                  <ChatBox
                    recipientAddress={orderDetails.buyer_address}
                    orderID={orderDetails._id.toString()}
                  />
                ) : (
                  <Text>Initializing XMTP client...</Text>
                )}
              </VStack>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <OpenOrderModal
        isOpen={isOpen}
        onClose={onClose}
        order={orderDetails}
        mode={"edit"}
      />
    </>
  );
};

export default SellerOrderExecution;
