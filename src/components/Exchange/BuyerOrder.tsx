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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import { IOrder } from "../../../lib/database/orders";
import OrderInfoCard from "./OrderInfoCard";
import ChatBox from "./ChatBox";
import { useXmtp } from "@/hooks/useXmtp";
import { ethers } from "ethers";
import { escrowContractFunction } from "@/utils/utlis";
import { GeneralProps, useGeneralStore } from "@/hooks/useGeneral";
import {
  isTransactionValid,
  paypalTransactionDetails,
} from "@/utils/paypalTransaction";
import { fetchEthPrice } from "@/utils/fetchETHprice";

const MotionBox = motion(Box);
interface BuyerOrderExecutionProps {
  orderDetails: IOrder | undefined;
}

const BuyerOrderExecution: React.FC<BuyerOrderExecutionProps> = ({
  orderDetails,
}) => {
  const [transactionId, setTransactionId] = useState("");
  const [verificationResult, setVerificationResult] = useState<any>(null);

  const [escrowStarted, setEscrowStarted] = useState(false);
  const [escrowReleased, setEscrowReleased] = useState(false);
  const [escrowReturned, setEscrowReturned] = useState(false);

  const toast = useToast();
  console.log("orderDetails:", orderDetails);

  let toastLoading: any;
  const web3AuthProvider = useGeneralStore(
    (state: GeneralProps) => state.web3AuthProvider
  );

  const { isInitialized } = useXmtp();

  const verifyPayPalTransaction = async (transactionId: string) => {
    try {
      if (!web3AuthProvider) {
        throw new Error("Failed to connect to Web3Auth");
      }
      const contract = await escrowContractFunction(web3AuthProvider.provider);
      if (!contract || !orderDetails) {
        console.log("contract/order not initialized/created");
        return;
      }

      console.log("verifying transaction");
      toastLoading = toast({
        title: "Verifying Transaction",
        description: "Please wait...",
        status: "loading",
        duration: null,
      });
      const response = await fetch("/api/verifyPayPalTransaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ transactionId }),
      });

      toast.close(toastLoading);
      if (!response.ok) {
        throw new Error("Failed to verify transaction");
      }
      const data = await response.json();

      setVerificationResult(data);
      console.log("data", data);
      const extractedDetails = paypalTransactionDetails(data);

      if (extractedDetails) {
        const ethPrice = await fetchEthPrice();
        const isValid = isTransactionValid(
          extractedDetails,
          orderDetails,
          Number(ethPrice) || 0
        );
        console.log("Is transaction valid:", isValid);
      }

      console.log("Tx Details:", extractedDetails);

      if (data.verified) {
        // If PayPal transaction is verified, call releaseEscrow
        console.log("transaction is verified");
        await releaseEscrow(contract, orderDetails.escrow_id);
        handleUpdatingOrder("completed");
      } else {
        // If PayPal transaction is not verified, call returnFunds

        console.log("transaction is not verified");
        await returnFunds(contract, orderDetails.escrow_id);
        handleUpdatingOrder("failed");
      }
    } catch (error) {
      console.error("Error verifying PayPal transaction:", error);
      setVerificationResult({
        verified: false,
        error: "Failed to verify transaction.",
      });
    } finally {
      toast.close(toastLoading);
    }
  };

  const releaseEscrow = async (
    contract: ethers.Contract,
    escrow_id: number
  ) => {
    try {
      console.log("Releasing escrow with ID:", escrow_id);
      const tx = await contract.releaseEscrow(escrow_id);
      toastLoading = toast({
        title: "Releasing Escrow",
        description: "Please wait...",
        status: "loading",
        duration: null,
      });
      console.log("Releasing escrow...");
      await tx.wait();
      console.log("Escrow released successfully");
      setEscrowReleased(true);
      toast.close(toastLoading);
      toast({
        title: "Escrow Released",
        description: "The funds have been released to the payee.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error: any) {
      console.error("Failed to release escrow:", error);
      if (error.message?.toLowerCase().includes("no funds in escrow")) {
        error.message = "No funds in escrow";
      } else {
        error.message = "Failed to release escrow.";
      }
      toast({
        title: "Failed to release escrow",
        description: error?.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      toast.close(toastLoading);
    }
  };

  const returnFunds = async (contract: ethers.Contract, escrow_id: number) => {
    try {
      toastLoading = toast({
        title: "Refunding Escrow",
        description: "Please wait...",
        status: "loading",
        duration: null,
      });
      const tx = await contract.returnFunds(escrow_id);
      await tx.wait();
      console.log("Escrow refunded");
      setEscrowReturned(true);

      toast.close(toastLoading);

      toast({
        title: "Escrow Refunded",
        description: "The funds have been refunded to the payee.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error: any) {
      console.error("Failed to return escrow:", error);
      toast({
        title: "Error",
        description: `Failed to return escrow: ${error?.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      toast.close(toastLoading);
    }
  };

  const handleUpdatingOrder = async (status = "in-progress") => {
    const storedUser = localStorage.getItem("user");

    if (!orderDetails || !storedUser) return;

    try {
      const pStoredUser = JSON.parse(storedUser);

      const data = {
        _id: orderDetails._id,
        buyer_email: pStoredUser.email,
        buyer_address: pStoredUser.walletAddress,
        amount: orderDetails.amount,
        currency: orderDetails.currency,
        status: status,
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
    handleUpdatingOrder();
  }, []);

  useEffect(() => {
    if (orderDetails) {
      setEscrowStarted(orderDetails.escrow_id > 0);
    }
  }, [orderDetails]);

  if (!orderDetails) return null;

  return (
    <>
      <Head>
        <title>Execute Order - Swap321</title>
      </Head>
      <Box minHeight="100vh" bg="black" color="white">
        <Container maxW="container.xl" pt="70px">
          <Flex direction="column">
            <Box p={4} borderBottom="1px solid" borderColor="gray.700">
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
            <Flex>
              <Box
                flex={2}
                p={6}
                borderRight="1px solid"
                borderColor="gray.700"
              >
                <VStack align="stretch" spacing={4}>
                  {/* Step 1: Order Info */}
                  <OrderInfoCard orderDetails={orderDetails} />

                  {/* Escrow Status */}
                  <Text
                    fontWeight="bold"
                    color={escrowStarted ? "green.500" : "red.500"}
                  >
                    {escrowStarted
                      ? "Confirmed and Deposited"
                      : "Awaiting Confirmation & Deposit"}
                  </Text>

                  {/* Step 2: Verify PayPal Transaction */}
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
                        {escrowStarted
                          ? "Confirm the seller's payment details, send fiat over PayPal and enter PayPal Tx ID to verify payment"
                          : "Waiting for seller to start escrow"}
                      </Text>
                    </HStack>
                    {escrowReleased ? (
                      <Text fontWeight="bold" color="green.500">
                        Transaction Successful: Escrow Released
                      </Text>
                    ) : escrowReturned ? (
                      <Text fontWeight="bold" color="red.500">
                        Transaction Failed: Escrow funds returned
                      </Text>
                    ) : (
                      escrowStarted && (
                        <Box bg="gray.800" p={4} borderRadius="md">
                          <Text color="gray.400">
                            Send to: {orderDetails?.seller_email}
                          </Text>
                          <Text color="gray.400">
                            Send to: {orderDetails?.seller_address}
                          </Text>
                          <Input
                            value={transactionId}
                            onChange={(e) => setTransactionId(e.target.value)}
                            placeholder="Enter PayPal Transaction ID"
                            mb={4}
                          />
                          <Button
                            onClick={() =>
                              verifyPayPalTransaction(transactionId)
                            }
                            colorScheme="purple"
                            width="full"
                          >
                            Confirm
                          </Button>
                          {verificationResult && (
                            <Box mt={4} p={4} bg="gray.700" borderRadius="md">
                              <Text fontWeight="bold">
                                Verification Result:
                              </Text>
                              <pre>
                                {JSON.stringify(verificationResult, null, 2)}
                              </pre>
                            </Box>
                          )}
                        </Box>
                      )
                    )}
                  </Box>
                </VStack>
              </Box>
              <VStack flex={1} p={6} align="stretch" spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Chat with Seller
                </Text>
                {isInitialized &&
                orderDetails?.seller_address &&
                orderDetails?._id ? (
                  <ChatBox
                    recipientAddress={orderDetails.seller_address}
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
    </>
  );
};

export default BuyerOrderExecution;
