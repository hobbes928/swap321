// src/components/Exchange/OrderDetailsModal.tsx
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
  Text,
  HStack,
  Flex,
  Input,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaEthereum, FaDollarSign } from "react-icons/fa";
import { useRouter } from "next/router";
import LoadingAnimation from "../shared/Loading";
import { GeneralProps, useGeneralStore } from "@/hooks/useGeneral";
import SignInModal from "../Auth/SignInModal";

const MotionFlex = motion(Flex);

interface OrderDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: any; // Replace with proper type
}

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({
  isOpen,
  onClose,
  order,
}) => {
  const [isInProgress, setIsInProgress] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const toast = useToast();
  const router = useRouter();
  const {
    isOpen: isSignInOpen,
    onOpen: onOpenSignIn,
    onClose: onCloseSignIn,
  } = useDisclosure();

  const general = useGeneralStore((state: GeneralProps) => state.general);

  const handleGeneral = useGeneralStore(
    (state: GeneralProps) => state.handleGeneral
  );

  const handleConnect = async () => {
    setIsLoading(true);
    onOpenSignIn();
    setIsLoading(false);
  };

  const handleConfirm = async () => {
    try {
      if (order) {
        const storedUser = localStorage.getItem("user");

        if (!storedUser) {
          return toast({
            title: "User information not found. Please sign in again.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }

        const parsedUser = JSON.parse(storedUser);

        if (
          parsedUser?.email != order?.buyer_email &&
          parsedUser?.email != order?.seller_email
        ) {
          if (order?.status === "in-progress") {
            return toast({
              title: "The order is in progress.",
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          }
        }

        setIsLoading(true);
        router.push(`/orders/${order._id}`);
      }
    } catch (error) {
      toast({
        title: "User information or provider not found. Please sign in again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (general.email) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
    if (order) {
      setIsInProgress(order?.status === "in-progress");
    }
  }, [general]);

  const handleSignIn = (userData: any) => {
    localStorage.setItem("user", JSON.stringify(userData));
    handleGeneral({
      walletAddress: userData?.walletAddress || "",
      email: userData?.email || "",
    });
  };

  if (!order) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        bg="rgba(0, 0, 0, 0.8)"
        borderColor="brand.purple"
        borderWidth={2}
        boxShadow="0 0 20px rgba(128, 0, 128, 0.5)"
      >
        <ModalHeader color="white">Order Details</ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody>
          <VStack spacing={6} align="stretch">
            <HStack justify="space-between">
              <Text>Order ID:</Text>
              <Text>{order?._id}</Text>
            </HStack>
            <HStack justify="space-between">
              <Text>Order Type:</Text>
              <Flex alignItems="center">
                {order?.currency === "ETH_TO_USD" ? (
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
            </HStack>
            <HStack justify="space-between">
              <Text>Amount:</Text>
              <Text>
                {order?.amount}{" "}
                {order?.currency === "ETH_TO_USD" ? "ETH" : "USD"}
              </Text>
            </HStack>
            <HStack justify="space-between">
              <Text>Time Remaining:</Text>
              <Text>{order?.time}</Text>
            </HStack>
            <HStack justify="space-between">
              <Text>Seller Wallet:</Text>
              <Text>{order?.seller_address}</Text>
            </HStack>
            {/* <VStack align="stretch">
              <Text>Your Wallet Address:</Text>
              <Input
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                placeholder="Enter your wallet address"
                bg="rgba(60, 60, 60, 0.6)"
              />
            </VStack> */}
            {isLoading ? (
              <LoadingAnimation />
            ) : (
              <Button
                colorScheme="purple"
                onClick={isValidated ? handleConfirm : handleConnect}
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isInProgress}
              >
                {isValidated
                  ? isInProgress
                    ? "In Progress"
                    : "Confirm Order"
                  : "Connect Wallet"}
              </Button>
            )}
          </VStack>
        </ModalBody>
      </ModalContent>
      <SignInModal
        isOpen={isSignInOpen}
        onClose={onCloseSignIn}
        onSignIn={handleSignIn}
      />
    </Modal>
  );
};

export default OrderDetailsModal;
