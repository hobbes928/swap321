import React, { useEffect, useState } from "react";
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
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEthereum, FaDollarSign } from "react-icons/fa";
import { GeneralProps, useGeneralStore } from "@/hooks/useGeneral";
import { useRouter } from "next/navigation";

const MotionBox = motion(Box);

interface OpenOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  order?: any;
  mode?: string;
}

const OpenOrderModal: React.FC<OpenOrderModalProps> = ({
  isOpen,
  onClose,
  order,
  mode = "create",
}) => {
  const [orderType, setOrderType] = useState<"ETH_TO_USD" | "USD_TO_ETH">(
    "ETH_TO_USD"
  );
  const [amount, setAmount] = useState("");
  const [durationHours, setDurationHours] = useState(0);
  const [durationMinutes, setDurationMinutes] = useState(0);
  const [durationSeconds, setDurationSeconds] = useState(0);
  const [user, setUser] = useState<any>(undefined);
  const [isCreatingOrder, setIsCreatingOrder] = useState(false);
  const toast = useToast();
  const router = useRouter();
  const general = useGeneralStore((state: GeneralProps) => state.general);
  const handleOrderTypeChange = () => {
    setOrderType((prev) =>
      prev === "ETH_TO_USD" ? "USD_TO_ETH" : "ETH_TO_USD"
    );
  };

  useEffect(() => {
    if (order && order.amount !== undefined) {
      setAmount(order.amount);
      setOrderType(order.currency);
    }
  }, [order]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Validate input: Allow only numbers and optionally one decimal point
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };
  const handleCreatingOrder = async () => {
    if (!amount || amount == "0" || amount == "") {
      return toast({
        title: "Amount",
        description: "Please enter the amount.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    try {
      setIsCreatingOrder(true);
      const data = {
        seller_email: general.email,
        seller_address: general.walletAddress,
        buyer_email: "",
        buyer_address: "",
        escrow_id: 0,
        amount: amount,
        currency: orderType,
        blockchain_tx: "0x123456...",
        PG_tx: "PAYPAL12345",
        updated_at: Date.now(),
      };
      let response;
      if (mode === "create") {
        response = await fetch("/api/Orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      } else {
        if (order?.status === "pending")
          response = await fetch("/api/Orders", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...data, _id: order?._id }),
          });
      }
      if (response && response.ok) {
        console.log("Order created successfully!");
        const message = `Your order has been successfully ${
          mode === "create" ? "created" : "updated"
        }.`;
        toast({
          title: `Order ${mode === "create" ? "Created" : "Updated"}`,
          description: message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        router.refresh();
        onClose();
      } else {
        console.error("Failed to create order");
        const message = `There was an issue ${
          mode === "create" ? "creating" : "updating"
        } your order. Please try again.`;
        toast({
          title: `Order ${mode === "create" ? "Creation" : "Updation"}  Failed`,
          description: message,
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
    } finally {
      setIsCreatingOrder(false);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [general]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        bg="rgba(0, 0, 0, 0.8)"
        borderColor="brand.purple"
        borderWidth={2}
        boxShadow="0 0 20px rgba(128, 0, 128, 0.5)"
      >
        <ModalHeader color="white">
          {mode === "create" ? "Open New" : "Edit"} Order
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody>
          <VStack spacing={6}>
            <Box w="100%">
              <Text mb={2}>Connected Wallet</Text>
              <Input
                value={user && user.walletAddress}
                isReadOnly
                bg="rgba(60, 60, 60, 0.6)"
              />
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
                      {orderType === "ETH_TO_USD" ? (
                        <>
                          <FaEthereum color="#00FFFF" />
                          <Text ml={2} mr={2}>
                            ETH ⇔ USD
                          </Text>
                          <FaDollarSign color="#00FF00" />
                        </>
                      ) : (
                        <>
                          <FaDollarSign color="#00FF00" />
                          <Text ml={2} mr={2}>
                            USD ⇔ ETH
                          </Text>
                          <FaEthereum color="#00FFFF" />
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
                onChange={handleAmountChange}
                placeholder={
                  orderType === "ETH_TO_USD" ? "ETH Amount" : "USD Amount"
                }
                bg="rgba(60, 60, 60, 0.6)"
              />
            </Box>
            {false && (
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
            )}
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
            disabled={isCreatingOrder}
          >
            {mode === "create" ? "Open" : "Update"} Order
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OpenOrderModal;
