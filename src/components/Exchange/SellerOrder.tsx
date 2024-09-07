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
import { escrowContractFunction } from "@/utils/utlis";
import { GeneralProps, useGeneralStore } from "@/hooks/useGeneral";

const MotionBox = motion(Box);
interface SellerOrderExecutionProps {
  orderDetails: IOrder | undefined;
}

const SellerOrderExecution: React.FC<SellerOrderExecutionProps> = ({
  orderDetails,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [chatMessages, setChatMessages] = useState<
    {
      sender: string;
      message: string;
    }[]
  >([]);
  const [inputMessage, setInputMessage] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [confirmed, setConfirmed] = useState(false);
  const toast = useToast();
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

  const startEscrow = async (
    contract: ethers.Contract,
    buyerAddress: string
  ) => {
    try {
      // Convert the amount to wei
      const amountInWei = ethers.parseEther(orderDetails?.amount || "0");

      const tx = await contract.startEscrow(
        buyerAddress,
        amountInWei,
        orderDetails?._id || "0",
        {
          value: amountInWei,
        }
      );

      let escrow_id = await tx.wait();
      console.log("escrow_id:", escrow_id);
      setConfirmed(true);
      if (escrow_id) {
        handleUpdatingOrder(escrow_id);
        return;
      }
      escrow_id = await contract.getEscrowIdByOrderId(orderDetails?._id);
      handleUpdatingOrder(escrow_id);
      console.log("Escrow started successfully");
    } catch (error) {
      console.error("Failed to start escrow:", error);
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

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        { sender: "You", message: inputMessage },
      ]);
      setInputMessage("");
    }
  };

  const handleCompleteStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      toast({
        title: "Order Completed",
        description: "The exchange has been successfully completed.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    if (orderDetails) {
      setBuyerAddress(orderDetails.buyer_address as string);
      console.log("orderDetails.escrow_id > 0:", orderDetails.escrow_id > 0);

      setConfirmed(orderDetails.escrow_id > 0);
    }
  }, [orderDetails]);
  const [buyerAddress, setBuyerAddress] = useState("");

  if (!orderDetails) return null;

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
                      {/* <Input
                        value={buyerAddress}
                        onChange={(e) => setBuyerAddress(e.target.value)}
                        placeholder="Enter Buyer Wallet Address"
                        mb={4}
                      /> */}
                      {buyerAddress ? (
                        <Button
                          onClick={() => startTransaction()}
                          colorScheme="purple"
                          width="full"
                          disabled={confirmed}
                        >
                          Confirm & Deposit
                        </Button>
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
                        Awaiting Seller Payment Verification
                      </Text>
                    </HStack>
                    <Box bg="gray.800" p={4} borderRadius="md">
                      <Text color="gray.400">
                        Payment Verified Escrow Released
                      </Text>
                    </Box>
                  </Box>

                  {/* Step 3: Confirm Payment Received */}
                  <Box>
                    <HStack mb={2}>
                      <Box
                        bg="yellow.400"
                        color="black"
                        px={2}
                        py={1}
                        borderRadius="full"
                      >
                        3
                      </Box>
                      <Text fontWeight="bold">Confirm Payment received</Text>
                    </HStack>
                    <Text color="gray.400" mb={4}>
                      After confirming that payment has been received, click the
                      'Payment Received' button below.
                    </Text>
                    <HStack>
                      <Button colorScheme="purple" onClick={handleCompleteStep}>
                        Payment Received
                      </Button>
                      {/* <Button variant="outline" colorScheme="teal">
                        Transaction issue, I want to appeal
                      </Button> */}
                    </HStack>
                  </Box>
                </VStack>
              </Box>
              <VStack flex={1} p={6} align="stretch" spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Chat
                </Text>
                <Box
                  flex={1}
                  overflowY="auto"
                  bg="gray.800"
                  p={4}
                  borderRadius="md"
                  minHeight="400px"
                >
                  {chatMessages.map((msg, index) => (
                    <Text key={index}>
                      <strong>{msg.sender}:</strong> {msg.message}
                    </Text>
                  ))}
                </Box>
                <Flex>
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type a message..."
                    mr={2}
                  />
                  <Button onClick={handleSendMessage} colorScheme="purple">
                    Send
                  </Button>
                </Flex>
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
