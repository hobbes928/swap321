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
import RPC from "../Auth/ethersRPC";

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
  const [walletAddress, setWalletAddress] = useState("");
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

  const web3AuthProvider = useGeneralStore(
    (state: GeneralProps) => state.web3Auth
  );

  const handleConnect = async () => {
    setIsLoading(true);
    onOpenSignIn();
    setIsLoading(false);
  };

  const handleConfirm = async () => {
    if (web3AuthProvider) {
      setIsLoading(true);
      console.log(web3AuthProvider);

      const rpc = new RPC(web3AuthProvider as any);
      const balance = await rpc.getBalance();
      console.log("balance:", balance);
      setIsLoading(false);
      router.push("/orderExecution");
    }
  };

  useEffect(() => {
    if (general.email) {
      // for now, we'll if the email is present, we must check if the current user is the seller or the one who opened this order
      setIsValidated(true);
    } else {
      setIsValidated(false);
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
              <Text>Order Type:</Text>
              <Flex alignItems="center">
                {order.type === "ETH_TO_USD" ? (
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
            </HStack>
            <HStack justify="space-between">
              <Text>Amount:</Text>
              <Text>
                {order.amount} {order.type === "ETH_TO_USD" ? "ETH" : "USD"}
              </Text>
            </HStack>
            <HStack justify="space-between">
              <Text>Time Remaining:</Text>
              <Text>{order.time}</Text>
            </HStack>
            <HStack justify="space-between">
              <Text>Seller Wallet:</Text>
              <Text>{order.wallet}</Text>
            </HStack>
            <VStack align="stretch">
              <Text>Your Wallet Address:</Text>
              <Input
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                placeholder="Enter your wallet address"
                bg="rgba(60, 60, 60, 0.6)"
              />
            </VStack>
            {isLoading ? (
              <LoadingAnimation />
            ) : (
              <Button
                colorScheme="purple"
                onClick={isValidated ? handleConfirm : handleConnect}
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isValidated ? "Confirm Order" : "Connect Wallet"}
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
