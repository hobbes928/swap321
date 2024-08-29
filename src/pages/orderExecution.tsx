// src/pages/order-execution.tsx
import React, { useState, useEffect } from 'react';
import { Box, Flex, VStack, Text, Button, Input, useToast, HStack, Divider, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaEthereum, FaDollarSign } from 'react-icons/fa';
import Head from 'next/head';
import Header from '../components/Layout/Header';
import { useRouter } from 'next/router';

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

const OrderExecutionPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    // In a real application, you would fetch the order details based on the order ID
    // For this example, we'll use mock data
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
                Please confirm that you have {orderDetails.type === 'ETH_TO_USD' ? 'received payment from the buyer' : 'sent the cryptocurrency to the seller'}
              </Text>
            </Box>
            <Flex>
              <Box flex={2} p={6} borderRight="1px solid" borderColor="gray.700">
                <VStack align="stretch" spacing={8}>
                  <Box>
                    <HStack mb={2}>
                      <Box bg="yellow.400" color="black" px={2} py={1} borderRadius="full">1</Box>
                      <Text fontWeight="bold">Confirm Order info</Text>
                    </HStack>
                    <Box bg="gray.800" p={4} borderRadius="md">
                      <HStack justify="space-between">
                        <Text color="gray.400">{orderDetails.type === 'ETH_TO_USD' ? 'ETH Amount' : 'USD Amount'}</Text>
                        <Text>{orderDetails.amount}</Text>
                      </HStack>
                      <HStack justify="space-between">
                        <Text color="gray.400">Price</Text>
                        <Text>{orderDetails.price}</Text>
                      </HStack>
                      <HStack justify="space-between">
                        <Text color="gray.400">{orderDetails.type === 'ETH_TO_USD' ? 'Receive USD' : 'Receive ETH'}</Text>
                        <Text>{orderDetails.receiveAmount}</Text>
                      </HStack>
                    </Box>
                  </Box>
                  <Box>
                    <HStack mb={2}>
                      <Box bg="yellow.400" color="black" px={2} py={1} borderRadius="full">2</Box>
                      <Text fontWeight="bold">
                        {orderDetails.type === 'ETH_TO_USD' ? "Confirm the buyer's payment" : "Confirm cryptocurrency sent"}
                      </Text>
                    </HStack>
                    <Box bg="gray.800" p={4} borderRadius="md">
                      <Text mb={2}>{orderDetails.type === 'ETH_TO_USD' ? 'Bank Card' : 'Wallet Address'}</Text>
                      <Text color="gray.400">{orderDetails.sellerInfo.name}</Text>
                      <Text color="gray.400">{orderDetails.sellerInfo.accountNumber}</Text>
                    </Box>
                  </Box>
                  <Box>
                    <HStack mb={2}>
                      <Box bg="yellow.400" color="black" px={2} py={1} borderRadius="full">3</Box>
                      <Text fontWeight="bold">
                        {orderDetails.type === 'ETH_TO_USD' ? 'Confirm Payment received' : 'Confirm Cryptocurrency sent'}
                      </Text>
                    </HStack>
                    <Text color="gray.400" mb={4}>
                      {orderDetails.type === 'ETH_TO_USD'
                        ? "After confirming that payment has been received, click the 'Payment Received' button below."
                        : "After confirming that you've sent the cryptocurrency, click the 'Cryptocurrency Sent' button below."}
                    </Text>
                    <HStack>
                      <Button colorScheme="yellow" onClick={handleCompleteStep}>
                        {orderDetails.type === 'ETH_TO_USD' ? 'Payment Received' : 'Cryptocurrency Sent'}
                      </Button>
                      <Button variant="outline" colorScheme="red">
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
                  <Button onClick={handleSendMessage}>Send</Button>
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