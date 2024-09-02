import React, { useState, useEffect } from 'react';
import { Box, Flex, VStack, Text, Button, Input, useToast, HStack, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Header from '../components/Layout/Header';
import { useRouter } from 'next/router';
import SellerOrderExecution from '../components/Exchange/SellerOrder';
import BuyerOrderExecution from '../components/Exchange/BuyerOrder';

const MotionBox = motion(Box);

interface OrderDetails {
  type: 'ETH_TO_USD' | 'USD_TO_ETH';
  amount: string;
  price: string;
  receiveAmount: string;
  sellerInfo: {
    name: string;
    accountNumber: string;
  };
}

interface TransactionQueryParams {
  start_date: string;
  end_date: string;
  transaction_id?: string;
  // Add other optional parameters as needed
}

async function listTransactions(accessToken: string, params: TransactionQueryParams) {
  const PAYPAL_API_BASE = 'https://api-m.sandbox.paypal.com'; // Use 'https://api-m.paypal.com' for production

  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      query.append(key, value);
    }
  });

  try {
    const response = await fetch(
      `${PAYPAL_API_BASE}/v1/reporting/transactions?${query.toString()}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error listing transactions:', error);
    throw error;
  }
}

const OrderExecutionPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [transactionId, setTransactionId] = useState('');
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const toast = useToast();
  const router = useRouter();

  async function getAccessToken() {
    const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
    const PAYPAL_SECRET = process.env.NEXT_PUBLIC_PAYPAL_SECRET;
    const PAYPAL_API_BASE = 'https://api-m.sandbox.paypal.com'; // Use 'https://api-m.paypal.com' for production

    const auth = btoa(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`);
    const response = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${auth}`,
      },
      body: 'grant_type=client_credentials',
    });

    if (!response.ok) {
      throw new Error('Failed to get access token');
    }

    const data = await response.json();
    return data.access_token;
  }

/*  const verifyPayPalTransaction = async (transactionId: string) => {
    try {
      const accessToken = await getAccessToken();

      const transactionParams: TransactionQueryParams = {
        start_date: '2023-01-01T00:00:00-0700',  // Adjust this date range as needed
        end_date: '2023-12-31T23:59:59-0700',    // Adjust this date range as needed
        transaction_id: transactionId,
      };

      const transactionData = await listTransactions(accessToken, transactionParams);

      setVerificationResult({
        verified: true,
        ...transactionData,
      });
    } catch (error) {
      console.error('Error verifying PayPal transaction:', error);
      setVerificationResult({
        verified: false,
        error: 'Failed to verify transaction',
      });
    }
  };
*/

const verifyPayPalTransaction = async (transactionId: string) => {
  try {
    const response = await fetch('/api/verifyPayPalTransaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ transactionId }),
    });

    if (!response.ok) throw new Error('Failed to verify transaction');
    const data = await response.json();

    setVerificationResult(data);
  } catch (error) {
    console.error('Error verifying PayPal transaction:', error);
    setVerificationResult({
      verified: false,
      error: 'Failed to verify transaction',
    });
  }
};


  const handleVerifyTransaction = () => {
    if (transactionId) {
      verifyPayPalTransaction(transactionId);
    } else {
      toast({
        title: "Error",
        description: "Please enter a transaction ID",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    const mockOrderDetails: OrderDetails = {
      type: router.query.type as 'ETH_TO_USD' | 'USD_TO_ETH' || 'ETH_TO_USD',
      amount: router.query.type === 'ETH_TO_USD' ? '1.5 ETH' : '2000 USD',
      price: router.query.type === 'ETH_TO_USD' ? '2000 USD' : '0.00075 ETH',
      receiveAmount: router.query.type === 'ETH_TO_USD' ? '3000 USD' : '1.5 ETH',
      sellerInfo: {
        name: 'MarchantnameMarchant',
        accountNumber: '123332123332',
      },
    };
    setOrderDetails(mockOrderDetails);
  }, [router.query]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setChatMessages([...chatMessages, { sender: 'You', message: inputMessage }]);
      setInputMessage('');
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
        <Header />
        <Container maxW="container.xl" pt="70px">
          <Flex direction="column">
            <Box p={4} borderBottom="1px solid" borderColor="gray.700">
              <Text fontSize="2xl" fontWeight="bold">Verify Payment</Text>
              <Text color="gray.400">
                Please confirm that you have {orderDetails?.type === 'ETH_TO_USD' ? 'received payment from the buyer' : 'sent the cryptocurrency to the seller'}
              </Text>
            </Box>
            <Flex>
              <Box flex={2} p={6} borderRight="1px solid" borderColor="gray.700">
                <VStack align="stretch" spacing={8}>
                  {/* Step 1: Order Info */}
                  <Box>
                    <HStack mb={2}>
                      <Box bg="yellow.400" color="black" px={2} py={1} borderRadius="full">1</Box>
                      <Text fontWeight="bold">Confirm Order Info</Text>
                    </HStack>
                    <Box bg="gray.800" p={4} borderRadius="md">
                      <HStack justify="space-between">
                        <Text color="gray.400">{orderDetails?.type === 'ETH_TO_USD' ? 'ETH Amount' : 'USD Amount'}</Text>
                        <Text>{orderDetails?.amount}</Text>
                      </HStack>
                      <HStack justify="space-between">
                        <Text color="gray.400">Price</Text>
                        <Text>{orderDetails?.price}</Text>
                      </HStack>
                      <HStack justify="space-between">
                        <Text color="gray.400">{orderDetails?.type === 'ETH_TO_USD' ? 'Receive USD' : 'Receive ETH'}</Text>
                        <Text>{orderDetails?.receiveAmount}</Text>
                      </HStack>
                    </Box>
                  </Box>

                  {/* Step 2: Verify PayPal Transaction */}
                  <Box>
                    <HStack mb={2}>
                      <Box bg="yellow.400" color="black" px={2} py={1} borderRadius="full">2</Box>
                      <Text fontWeight="bold">Confirm the buyer's payment</Text>
                    </HStack>
                    <Box bg="gray.800" p={4} borderRadius="md">
                      <Text mb={2}>Bank Card</Text>
                      <Text color="gray.400">{orderDetails?.sellerInfo.name}</Text>
                      <Text color="gray.400">{orderDetails?.sellerInfo.accountNumber}</Text>
                      <Input
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        placeholder="Enter PayPal Transaction ID"
                        mt={4}
                        mb={2}
                      />
                      <Button onClick={handleVerifyTransaction} colorScheme="purple" width="full">
                        Confirm
                      </Button>
                      {verificationResult && (
                        <Box mt={4} p={4} bg="gray.700" borderRadius="md">
                          <Text fontWeight="bold">Verification Result:</Text>
                          <pre>{JSON.stringify(verificationResult, null, 2)}</pre>
                        </Box>
                      )}
                    </Box>
                  </Box>

                  {/* Step 3: Confirm Payment Received */}
                  <Box>
                    <HStack mb={2}>
                      <Box bg="yellow.400" color="black" px={2} py={1} borderRadius="full">3</Box>
                      <Text fontWeight="bold">Confirm Payment received</Text>
                    </HStack>
                    <Text color="gray.400" mb={4}>
                      After confirming that payment has been received, click the 'Payment Received' button below.
                    </Text>
                    <HStack>
                      <Button colorScheme="purple" onClick={handleCompleteStep}>
                        Payment Received
                      </Button>
                      <Button variant="outline" colorScheme="teal">
                        Transaction issue, I want to appeal
                      </Button>
                    </HStack>
                  </Box>
                </VStack>
              </Box>
              <VStack flex={1} p={6} align="stretch" spacing={4}>
                <Text fontSize="xl" fontWeight="bold">Chat</Text>
                <Box flex={1} overflowY="auto" bg="gray.800" p={4} borderRadius="md" minHeight="400px">
                  {chatMessages.map((msg, index) => (
                    <Text key={index}><strong>{msg.sender}:</strong> {msg.message}</Text>
                  ))}
                </Box>
                <Flex>
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type a message..."
                    mr={2}
                  />
                  <Button onClick={handleSendMessage} colorScheme="purple">Send</Button>
                </Flex>
              </VStack>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default OrderExecutionPage;