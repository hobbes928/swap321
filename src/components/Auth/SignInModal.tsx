import React, { useState, useEffect } from 'react';
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
  Flex,
} from '@chakra-ui/react';
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { motion, AnimatePresence } from 'framer-motion';
import { FaGoogle, FaDiscord, FaTwitter } from 'react-icons/fa';
import RPC from "./ethersRPC"; // Import the RPC methods

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: (user: any) => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose, onSignIn }) => {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [isWeb3AuthInitialized, setWeb3AuthInitialized] = useState(false);
  const [email, setEmail] = useState('');
  const toast = useToast();

  useEffect(() => {
    const initWeb3Auth = async () => {
      const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
      const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL;

      if (!clientId || !rpcUrl) {
        console.error("Missing environment variables");
        toast({
          title: "Configuration Error",
          description: "Missing environment variables",
          status: "error",
          duration: null,
          isClosable: true,
        });
        return;
      }

      const chainConfig = {
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: "0xaa36a7",
        rpcTarget: rpcUrl,
        displayName: "Ethereum Sepolia Testnet",
        blockExplorerUrl: "https://sepolia.etherscan.io",
        ticker: "ETH",
        tickerName: "Ethereum",
      };

      const privateKeyProvider = new EthereumPrivateKeyProvider({
        config: { chainConfig }
      });

      try {
        const web3auth = new Web3Auth({
          clientId: clientId,
          web3AuthNetwork: WEB3AUTH_NETWORK.TESTNET,
          chainConfig,
          privateKeyProvider
        });

        const openloginAdapter = new OpenloginAdapter({
          adapterSettings: {
            clientId: clientId,
            network: "testnet",
            uxMode: "popup",
          },
        });

        web3auth.configureAdapter(openloginAdapter);

        await web3auth.initModal();
        setWeb3auth(web3auth);
        setWeb3AuthInitialized(true);
      } catch (error) {
        console.error("Web3Auth initialization failed:", error);
        toast({
          title: "Initialization failed",
          description: "Web3Auth could not be initialized. Check console for details.",
          status: "error",
          duration: null,
          isClosable: true,
        });
      }
    };

    if (!isWeb3AuthInitialized) {
      initWeb3Auth();
    }
  }, [isWeb3AuthInitialized, toast]);

  const login = async (loginMethod: string) => {
    if (!web3auth || !isWeb3AuthInitialized) {
      toast({ title: "Web3Auth not initialized", status: "error" });
      return;
    }
    try {
      if (web3auth.connected) {
        await web3auth.logout();
      }
      let web3authProvider;
      switch (loginMethod) {
        case 'email':
          web3authProvider = await web3auth.connectTo("openlogin", { loginProvider: "email_passwordless", extraLoginOptions: { login_hint: email } });
          break;
        case 'google':
          web3authProvider = await web3auth.connectTo("openlogin", { loginProvider: "google" });
          break;
        case 'discord':
          web3authProvider = await web3auth.connectTo("openlogin", { loginProvider: "discord" });
          break;
        case 'twitter':
          web3authProvider = await web3auth.connectTo("openlogin", { loginProvider: "twitter" });
          break;
        default:
          throw new Error("Invalid login method");
      }
      const user = await web3auth.getUserInfo();
      
      // Fetch the wallet address
      const address = await RPC.getAccounts(web3authProvider);
      
      // Combine user info with wallet address
      const userWithWallet = {
        ...user,
        walletAddress: address
      };
      
      onSignIn(userWithWallet);
      onClose();
    } catch (error) {
      console.error("Login failed:", error);
      toast({ title: "Login failed", description: `Could not log in with ${loginMethod}. ${(error as Error).message}`, status: "error" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose} size="md">
          <ModalOverlay backdropFilter="blur(10px)" />
          <ModalContent
            bg="transparent"
            boxShadow="0 0 20px rgba(255, 0, 255, 0.5)"
            borderRadius="xl"
            overflow="hidden"
          >
            <MotionBox
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ModalBody p={8} bg="rgba(0, 0, 0, 0.8)">
                <VStack spacing={6} align="stretch">
                  <MotionFlex
                    justify="center"
                    align="center"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Image src="/logo.png" alt="Logo" boxSize="80px" />
                  </MotionFlex>
                  <Text color="white" fontSize="2xl" fontWeight="bold" textAlign="center">
                    Connect Your Wallet
                  </Text>
                  <MotionBox
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Input
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      bg="rgba(255, 255, 255, 0.1)"
                      border="none"
                      color="white"
                      _placeholder={{ color: "gray.400" }}
                    />
                    <Button
                      mt={2}
                      w="100%"
                      bg="brand.neonPink"
                      color="white"
                      _hover={{ bg: "brand.neonPink", opacity: 0.8 }}
                      onClick={() => login('email')}
                    >
                      Connect with Email
                    </Button>
                  </MotionBox>
                  <Text color="gray.400" textAlign="center">Or connect with</Text>
                  <MotionFlex justify="center" spacing={4}>
                    {[
                      { icon: FaGoogle, method: 'google', color: '#DB4437' },
                      { icon: FaDiscord, method: 'discord', color: '#7289DA' },
                      { icon: FaTwitter, method: 'twitter', color: '#1DA1F2' },
                    ].map((item, index) => (
                      <MotionBox
                        key={item.method}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <Button
                          bg={item.color}
                          color="white"
                          _hover={{ opacity: 0.8 }}
                          onClick={() => login(item.method)}
                        >
                          <item.icon />
                        </Button>
                      </MotionBox>
                    ))}
                  </MotionFlex>
                </VStack>
              </ModalBody>
            </MotionBox>
          </ModalContent>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default SignInModal;