import React from 'react';
import { Box, VStack, Text, Button, HStack } from '@chakra-ui/react';

interface SellerOrderExecutionProps {
  orderDetails: OrderDetails;
  handleCompleteStep: () => void;
}

const SellerOrderExecution: React.FC<SellerOrderExecutionProps> = ({ orderDetails, handleCompleteStep }) => {
  return (
    <VStack align="stretch" spacing={8}>
      <Box>
        <HStack mb={2}>
          <Box bg="yellow.400" color="black" px={2} py={1} borderRadius="full">1</Box>
          <Text fontWeight="bold">Confirm Order info</Text>
        </HStack>
        <Box bg="gray.800" p={4} borderRadius="md">
          <HStack justify="space-between">
            <Text color="gray.400">ETH Amount</Text>
            <Text>{orderDetails.amount}</Text>
          </HStack>
          <HStack justify="space-between">
            <Text color="gray.400">Price</Text>
            <Text>{orderDetails.price}</Text>
          </HStack>
          <HStack justify="space-between">
            <Text color="gray.400">Receive USD</Text>
            <Text>{orderDetails.receiveAmount}</Text>
          </HStack>
        </Box>
      </Box>
      <Box>
        <HStack mb={2}>
          <Box bg="yellow.400" color="black" px={2} py={1} borderRadius="full">2</Box>
          <Text fontWeight="bold">Confirm the buyer's payment</Text>
        </HStack>
        <Box bg="gray.800" p={4} borderRadius="md">
          <Text mb={2}>Bank Card</Text>
          <Text color="gray.400">{orderDetails.sellerInfo.name}</Text>
          <Text color="gray.400">{orderDetails.sellerInfo.accountNumber}</Text>
        </Box>
      </Box>
      <Box>
        <HStack mb={2}>
          <Box bg="yellow.400" color="black" px={2} py={1} borderRadius="full">3</Box>
          <Text fontWeight="bold">Confirm Payment received</Text>
        </HStack>
        <Text color="gray.400" mb={4}>
          After confirming that payment has been received, click the 'Payment Received' button below.
        </Text>
        <HStack>
          <Button colorScheme="yellow" onClick={handleCompleteStep}>
            Payment Received
          </Button>
          <Button variant="outline" colorScheme="red">
            Transaction issue, I want to appeal
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default SellerOrderExecution;