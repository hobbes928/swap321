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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import { IOrder } from "../../../lib/database/orders";
import OrderInfoCard from "./OrderInfoCard";
import { ethers } from 'ethers';
import EscrowABI from '../../../smart_contracts/contracts/artifacts/Escrow.json';
import { useGeneralStore, GeneralProps } from "@/hooks/useGeneral";

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
  const [isWeb3AuthReady, setIsWeb3AuthReady] = useState(false);
  const toast = useToast();
  const web3AuthProvider = useGeneralStore(
    (state: GeneralProps) => state.web3AuthProvider
  );

/*
  const initializeWeb3Auth = async () => {
    try {
      const chainConfig = {
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: "0xaa36a7", // Sepolia testnet
        rpcTarget: "https://sepolia.infura.io/v3/2c95e7227a524c75b007db514c409415", // Use your own Infura ID or another RPC provider
        displayName: "Sepolia Testnet",
        blockExplorerUrl: "https://sepolia.etherscan.io",
        ticker: "ETH",
        tickerName: "Ethereum",
      };

      const web3auth = new Web3Auth({
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID!, // Make sure this is set correctly
        web3AuthNetwork: "testnet",
        chainConfig,
        privateKeyProvider: new EthereumPrivateKeyProvider({ config: { chainConfig } }),
      });

      await web3auth.initModal();
      setWeb3auth(web3auth);
    } catch (error) {
      console.error("Failed to initialize Web3Auth:", error);
    }
  };
*/

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
      const latestId = await contract.getLatestEscrowId();

      console.log("latestId", latestId);
      setLatestEscrowId(Number(latestId) - 1);
      console.log("latestId", Number(latestId) - 1);
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
      const contract = await escrowContractFunction();
      if (!contract) {
        console.log("contract not initialized");
        return;
      }
      console.log("verifying transaction");
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
        console.log("data verified");
        await releaseEscrow(contract);
        
      }
    } catch (error) {
      console.error("Error verifying PayPal transaction:", error);
      setVerificationResult({
        verified: false,
        error: "Failed to verify transaction",
      });
    }
  };

  const releaseEscrow = async (contract: ethers.Contract) => {
    if (!contract) {
      console.error("Escrow contract is not initialized");
      return;
    }

    // if (latestEscrowId === null) {
    //   console.error("Latest escrow ID is not set");
    //   return;
    // }

    try {
      // Get the current user's address
      const signer = await contract.runner.provider.getSigner();
      console.log("signer", signer);
      const userAddress = await signer.getAddress();
      console.log("userAddress", userAddress);  

      // Get the escrow details
      const [payer, payee, amount, isPaid] = await contract.getEscrowDetails(0);
      console.log("payer", payer);
      console.log("payee", payee);
      console.log("amount", amount);
      console.log("isPaid", isPaid);

      // Check if the current user is the payee
      if (userAddress.toLowerCase() !== payee.toLowerCase()) {
        throw new Error("Only the payee can release the escrow");
      }

      // Check if the escrow has already been paid
      if (isPaid) {
        throw new Error("This escrow has already been paid");
      }

      const tx = await contract.releaseEscrow(0);
      console.log("Releasing escrow...");
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
        description: `Failed to release escrow: ${error.message}`,
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
