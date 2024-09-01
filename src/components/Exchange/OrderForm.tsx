import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  HStack,
  Text,
  Input,
  Select,
  Box,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEthereum, FaDollarSign } from 'react-icons/fa';

const MotionBox = motion(Box);

interface OpenOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OpenOrderModal: React.FC<OpenOrderModalProps> = ({ isOpen, onClose }) => {
  const [orderType, setOrderType] = useState<'ETH_TO_USD' | 'USD_TO_ETH'>('ETH_TO_USD');
  const [amount, setAmount] = useState('');
  const [durationHours, setDurationHours] = useState(0);
  const [durationMinutes, setDurationMinutes] = useState(0);
  const [durationSeconds, setDurationSeconds] = useState(0);
  const [user, setUser] = useState<any>(undefined);

  const toast = useToast(); 

  const handleOrderTypeChange = () => {
    setOrderType((prev) =>
      prev === "ETH_TO_USD" ? "USD_TO_ETH" : "ETH_TO_USD"
    );
  };

  const handleCreatingOrder = async () => {
    try {
      const response = await fetch("/api/Orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          seller_email: "seller@example.com", 
          buyer_email: "buyer@example.com",   
          amount: amount,
          currency: orderType, 
          blockchain_tx: "0x123456...", 
          PG_tx: "PAYPAL12345", 
        }),
      });
  
      if (response.ok) {
        console.log("Order created successfully!");
        toast({
          title: "Order Created",
          description: "Your order has been successfully created.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        onClose();
      } else {
        console.error("Failed to create order");
        toast({
          title: "Order Creation Failed",
          description: "There was an issue creating your order. Please try again.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
      
    } catch (error) {
      console.error("Error creating order:", error);
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
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      console.log("storedUser:",JSON.parse(storedUser));
      
    }
  }, []);
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        bg="rgba(0, 0, 0, 0.8)"
        borderColor="brand.purple"
        borderWidth={2}
        boxShadow="0 0 20px rgba(128, 0, 128, 0.5)"
      >
        <ModalHeader color="white">Open New Order</ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody>
          <VStack spacing={6}>
            <Box w="100%">
              <Text mb={2}>Connected Wallet</Text>
              <Input value={user && user.walletAddress} isReadOnly bg="rgba(60, 60, 60, 0.6)" />
            </Box>
            <Box w="100%">
              <Text mb={2}>Order Type</Text>
              <MotionBox
                as={Button}
                onClick={handleOrderTypeChange}
                w="100%"
                h="50px"
                bg="rgba(60, 60, 60, 0.6)"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                px={4}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  <MotionBox
                    key={orderType}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Flex alignItems="center">
                      {orderType === 'ETH_TO_USD' ? (
                        <>
                          <FaEthereum color="#00FFFF" />
                          <Text ml={2}>ETH ⇔ USD</Text>
                          <FaDollarSign color="#00FF00" ml={2} />
                        </>
                      ) : (
                        <>
                          <FaDollarSign color="#00FF00" />
                          <Text ml={2}>USD ⇔ ETH</Text>
                          <FaEthereum color="#00FFFF" ml={2} />
                        </>
                      )}
                    </Flex>
                  </MotionBox>
                </AnimatePresence>
              </MotionBox>
            </Box>
            <Box w="100%">
              <Text mb={2}>Amount</Text>
              <Input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder={orderType === 'ETH_TO_USD' ? "ETH Amount" : "USD Amount"}
                bg="rgba(60, 60, 60, 0.6)"
              />
            </Box>
            <Box w="100%">
              <Text mb={2}>Order Duration</Text>
              <HStack>
                <VStack>
                  <Text>Hours</Text>
                  <NumberInput
                    value={durationHours}
                    onChange={(_, value) => setDurationHours(value)}
                    min={0}
                    max={23}
                    bg="rgba(60, 60, 60, 0.6)"
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </VStack>
                <VStack>
                  <Text>Minutes</Text>
                  <NumberInput
                    value={durationMinutes}
                    onChange={(_, value) => setDurationMinutes(value)}
                    min={0}
                    max={59}
                    bg="rgba(60, 60, 60, 0.6)"
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </VStack>
                <VStack>
                  <Text>Seconds</Text>
                  <NumberInput
                    value={durationSeconds}
                    onChange={(_, value) => setDurationSeconds(value)}
                    min={0}
                    max={59}
                    bg="rgba(60, 60, 60, 0.6)"
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </VStack>
              </HStack>
            </Box>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="purple"
            mr={3}
            onClick={handleCreatingOrder}
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Open Order
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OpenOrderModal;
