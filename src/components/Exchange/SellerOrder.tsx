import { useState, useEffect } from "react";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, IProvider } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
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
import { ethers } from 'ethers';
import EscrowABI from '../../../smart_contracts/contracts/artifacts/Escrow.json';
import { useGeneralStore, GeneralProps } from "@/hooks/useGeneral";
import ChatBox from './ChatBox';
import { useXmtp } from '@/hooks/useXmtp';

const MotionBox = motion(Box);
interface SellerOrderExecutionProps {
  orderDetails: IOrder | undefined;
}

const SellerOrderExecution: React.FC<SellerOrderExecutionProps> = ({
  orderDetails,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
  const [isWeb3AuthReady, setIsWeb3AuthReady] = useState(false);
  const { client, isInitialized } = useXmtp();
  const toast = useToast();
  const web3AuthProvider = useGeneralStore(
    (state: GeneralProps) => state.web3AuthProvider
  );

  const escrowContractFunction = async () => {

    try {
      if (!web3AuthProvider) {
        throw new Error("Failed to connect to Web3Auth");
      }
      console.log("before provider");
      const provider = new ethers.BrowserProvider(web3AuthProvider.provider);
      console.log("after provider");
      const signer = await provider.getSigner();
      console.log("signer", signer);
      const contract = new ethers.Contract(process.env.NEXT_PUBLIC_ESCROW_CONTRACT_ADDRESS!, EscrowABI, signer);
      console.log("contract", contract);
    
      setEscrowContract(contract);
      return contract;
    } catch (error) {
      console.error("Failed to initialize the contract:", error);
  
  
    }}
  
  const initializeContract = async () => {
  
    try {
    
      // Get the latest escrow ID
      const contract = await escrowContractFunction();
      if (!contract) {
        console.log("contract not initialized");
        return;
      }
  
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

  const startTransaction = async (buyerAddress: string) => {
    const contract = await escrowContractFunction();
    if (contract) {
      await startEscrow(contract, buyerAddress);
    } else {
      console.error("Failed to initialize contract");
      // Optionally, show an error toast here
    }
  };

  const startEscrow = async (contract: ethers.Contract, buyerAddress: string) => {
    try {
      // Convert the amount to wei
      const amountInWei = ethers.parseEther(orderDetails?.amount.toString() || "0");
      
      const tx = await contract.startEscrow(buyerAddress, amountInWei, {
        value: amountInWei
      });
      await tx.wait();
      console.log("Escrow started successfully");
    } catch (error) {
      console.error("Failed to start escrow:", error);
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

  const [buyerAddress, setBuyerAddress] = useState("");

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
                      <Input
                        value={buyerAddress}
                        onChange={(e) => setBuyerAddress(e.target.value)}
                        placeholder="Enter Buyer Wallet Address"
                        mb={4}
                      />
                      <Button
                        onClick={() => startTransaction(buyerAddress)}
                        colorScheme="purple"
                        width="full"
                      >
                        Confirm & Deposit
                      </Button>
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
                      <Text fontWeight="bold">Awaiting Seller Payment Verification</Text>
                    </HStack>
                    <Box bg="gray.800" p={4} borderRadius="md">
                      <Text color="gray.400">Payment Verified Escrow Released</Text>
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
                  Chat with Buyer
                </Text>
                {isInitialized && orderDetails?.buyer_address && orderDetails?._id ? (
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
