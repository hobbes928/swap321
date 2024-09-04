import { useState, useEffect } from "react";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";
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
import { ethers } from 'ethers';
import EscrowABI from '../../../smart_contracts/artifacts/contracts/Escrow.sol/Escrow.json';

const MotionBox = motion(Box);
interface BuyerOrderExecutionProps {
  orderDetails: IOrder | undefined;
}

const BuyerOrderExecution: React.FC<BuyerOrderExecutionProps> = ({
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
  const [transactionId, setTransactionId] = useState("");
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [escrowContract, setEscrowContract] = useState<ethers.Contract | null>(null);
  const [latestEscrowId, setLatestEscrowId] = useState<number | null>(null);
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const toast = useToast();

  useEffect(() => {
    initializeWeb3Auth();
  }, []);

  const initializeWeb3Auth = async () => {
    try {
      const web3auth = new Web3Auth({
        clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID!,
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: "0xaa36a7", // Sepolia testnet
          rpcTarget: "https://sepolia.infura.io/v3/YOUR_INFURA_ID",
          displayName: "Sepolia Testnet",
          blockExplorerUrl: "https://sepolia.etherscan.io",
          ticker: "ETH",
          tickerName: "Ethereum",
        },
      });

      setWeb3auth(web3auth);
      await web3auth.initModal();
    } catch (error) {
      console.error("Failed to initialize Web3Auth:", error);
    }
  };

  const initializeContract = async () => {
    if (!web3auth) {
      console.error("Web3Auth not initialized");
      return;
    }

    try {
      const web3authProvider = await web3auth.connect();
      if (!web3authProvider) {
        throw new Error("Failed to connect to Web3Auth");
      }

      const provider = new ethers.BrowserProvider(web3authProvider);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(process.env.NEXT_PUBLIC_ESCROW_CONTRACT_ADDRESS!, EscrowABI.abi, provider);
      setEscrowContract(contract);

      // Get the latest escrow ID
      const latestId = await contract.getLatestEscrowId();
      setLatestEscrowId(latestId.toNumber());
    } catch (error) {
      console.error("Failed to initialize the contract:", error);
      toast({
        title: "Error",
        description: "Failed to connect to the Escrow contract. Please check your Web3Auth connection.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const verifyPayPalTransaction = async (transactionId: string) => {
    try {
      const response = await fetch("/api/verifyPayPalTransaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ transactionId }),
      });

      if (!response.ok) throw new Error("Failed to verify transaction");
      const data = await response.json();

      setVerificationResult(data);

      if (data.verified) {
        // If PayPal transaction is verified, call releaseEscrow
        await releaseEscrow();
      }
    } catch (error) {
      console.error("Error verifying PayPal transaction:", error);
      setVerificationResult({
        verified: false,
        error: "Failed to verify transaction",
      });
    }
  };

  const releaseEscrow = async () => {
    if (!escrowContract) {
      console.error("Escrow contract is not initialized");
      return;
    }

    if (latestEscrowId === null) {
      console.error("Latest escrow ID is not set");
      return;
    }

    try {
      const tx = await escrowContract.releaseEscrow(latestEscrowId);
      await tx.wait();
      console.log("Escrow released successfully");
      toast({
        title: "Escrow Released",
        description: "The funds have been released to the payee.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Failed to release escrow:", error);
      toast({
        title: "Error",
        description: "Failed to release escrow. Please try again.",
        status: "error",
        duration: 5000,
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
                <VStack align="stretch" spacing={8}>
                  {/* Step 1: Order Info */}
                  <OrderInfoCard orderDetails={orderDetails} />

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
                        Confirm the seller's payment details, send fiat over PayPal and enter PayPal Tx ID to verify payment
                      </Text>
                    </HStack>
                    <Box bg="gray.800" p={4} borderRadius="md">
                      <Text color="gray.400">{orderDetails?.seller_email}</Text>
                      <Text color="gray.400">
                        {orderDetails?.seller_address}
                      </Text>
                      <Input
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        placeholder="Enter PayPal Transaction ID"
                        mb={4}
                      />
                      <Button
                        onClick={() => verifyPayPalTransaction(transactionId)}
                        colorScheme="purple"
                        width="full"
                      >
                        Confirm
                      </Button>
                      {verificationResult && (
                        <Box mt={4} p={4} bg="gray.700" borderRadius="md">
                          <Text fontWeight="bold">Verification Result:</Text>
                          <pre>
                            {JSON.stringify(verificationResult, null, 2)}
                          </pre>
                        </Box>
                      )}
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
    </>
  );
};

export default BuyerOrderExecution;
