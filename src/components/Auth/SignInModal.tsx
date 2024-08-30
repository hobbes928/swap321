// src/components/Auth/SignInModal.tsx
import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  VStack,
  Text,
  useToast,
  Image,
  Box,
  Input,
  HStack,
} from '@chakra-ui/react';
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { FaGoogle, FaReddit, FaTwitter, FaDiscord } from 'react-icons/fa';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: (user: any) => void;
}

const clientId = "BP9eCYGWm8qmHGAlUXkroGZCg-S0xBC1PZrZNvxtLoTXtl9Ja7zt2ReHGR_KEyfQJtLkJPgA4uyftSB9EG_MLAM";

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose, onSignIn }) => {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [email, setEmail] = useState('');
  const toast = useToast();

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0xaa36a7", // Sepolia testnet
            rpcTarget: "https://rpc.ankr.com/eth_sepolia",
          },
          web3AuthNetwork: "cyan",
        });

        const openloginAdapter = new OpenloginAdapter({
          adapterSettings: {
            clientId,
            network: "testnet",
            uxMode: "popup",
          },
        });
        web3auth.configureAdapter(openloginAdapter);

        await web3auth.initModal();
        setWeb3auth(web3auth);
      } catch (error) {
        console.error("Failed to initialize Web3Auth", error);
        toast({
          title: "Failed to initialize Web3Auth",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    };

    init();
  }, [toast]);

  const login = async (loginProvider?: string) => {
    if (!web3auth) {
      toast({
        title: "Web3Auth not initialized",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    try {
      const web3authProvider = await web3auth.connect(loginProvider ? { loginProvider } : undefined);
      if (web3authProvider) {
        const user = await web3auth.getUserInfo();
        onSignIn(user);
        onClose();
      }
    } catch (error) {
      console.error("Login failed", error);
      toast({
        title: "Login failed",
        description: (error as Error).message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const loginWithEmail = async () => {
    if (!email) {
      toast({
        title: "Email is required",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    await login("email_passwordless");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        bg="black"
        borderColor="gray.700"
        borderWidth={1}
        borderRadius="xl"
      >
        <ModalBody p={8}>
          <VStack spacing={6} align="stretch">
            <Box textAlign="center">
              <Image src="/logo.png" alt="Logo" boxSize="50px" mx="auto" />
              <Text color="white" fontSize="2xl" fontWeight="bold" mt={4}>
                Hello 👋 & welcome back!
              </Text>
              <Text color="gray.400" fontSize="sm">
                Let's get you logged in at suuuuuuper speed!
              </Text>
            </Box>
            <Box>
              <Text color="gray.400" mb={2}>Login via</Text>
              <Input
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                bg="gray.800"
                border="none"
                color="white"
              />
              <Button
                mt={2}
                w="100%"
                bg="brand.neonGreen"
                color="black"
                _hover={{ bg: "brand.neonGreen", opacity: 0.8 }}
                onClick={loginWithEmail}
              >
                Submit
              </Button>
            </Box>
            <Text color="gray.400" textAlign="center">Or</Text>
            <HStack justify="center" spacing={4}>
              <Button onClick={() => login("google")} bg="transparent" color="white" _hover={{ bg: "whiteAlpha.200" }}>
                <FaGoogle />
              </Button>
              <Button onClick={() => login("facebook")} bg="transparent" color="white" _hover={{ bg: "whiteAlpha.200" }}>
                <FaReddit />
              </Button>
              <Button onClick={() => login("twitter")} bg="transparent" color="white" _hover={{ bg: "whiteAlpha.200" }}>
                <FaTwitter />
              </Button>
              <Button onClick={() => login("discord")} bg="transparent" color="white" _hover={{ bg: "whiteAlpha.200" }}>
                <FaDiscord />
              </Button>
            </HStack>
            <Text color="gray.400" textAlign="center">Or</Text>
            <Button
              variant="outline"
              color="brand.neonGreen"
              borderColor="brand.neonGreen"
              _hover={{ bg: "whiteAlpha.200" }}
              onClick={() => login("metamask")}
            >
              Connect Wallet
            </Button>
            <Text color="gray.600" fontSize="xs" textAlign="center">
              © Capx 2023. All rights reserved
            </Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SignInModal;