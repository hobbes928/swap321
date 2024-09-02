import React, { useState, useEffect, useCallback } from 'react';
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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK, WALLET_ADAPTERS } from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { motion, AnimatePresence } from 'framer-motion';
import { FaGoogle, FaApple, FaDollarSign, FaEthereum } from 'react-icons/fa';
import { SiEthereum } from 'react-icons/si';
import RPC from "./ethersRPC";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: (user: any) => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose, onSignIn }) => {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<any>(null);
  const [isWeb3AuthInitialized, setWeb3AuthInitialized] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [showDollar, setShowDollar] = useState(true);
  const toast = useToast();

  const initWeb3Auth = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
      const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL;

      if (!clientId || !rpcUrl) {
        throw new Error("Missing environment variables");
      }

      const chainConfig = {
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: "0xaa36a7", // Sepolia testnet
        rpcTarget: rpcUrl,
        displayName: "Ethereum Sepolia Testnet",
        blockExplorer: "https://sepolia.etherscan.io",
        ticker: "ETH",
        tickerName: "Ethereum",
      };

      const privateKeyProvider = new EthereumPrivateKeyProvider({
        config: { chainConfig }
      });

      const web3auth = new Web3Auth({
        clientId: clientId,
        web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
        chainConfig,
        privateKeyProvider,
      });

      const openloginAdapter = new OpenloginAdapter({
        adapterSettings: {
          network: "sapphire_devnet",
          uxMode: "popup",
        },
      });

      web3auth.configureAdapter(openloginAdapter);
      setWeb3auth(web3auth);

      await web3auth.initModal();
      setWeb3AuthInitialized(true);
      
      if (web3auth.provider) {
        setProvider(web3auth.provider);
      }
    } catch (error) {
      console.error("Error initializing Web3Auth", error);
      setError(`Failed to initialize Web3Auth: ${(error as Error).message}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      initWeb3Auth();
    }
  }, [isOpen, initWeb3Auth]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowDollar((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const login = async (loginMethod: string) => {
    if (!web3auth) {
      setError("Web3Auth not initialized");
      return;
    }
    
    if (web3auth.connected) {
      await web3auth.logout();
    }
    
    setIsLoading(true);
    setError(null);
    try {
      let web3authProvider;
      switch (loginMethod) {
        case 'email':
          web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
            loginProvider: "email_passwordless",
            extraLoginOptions: {
              login_hint: email,
            },
          });
          break;
        case 'google':
          web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
            loginProvider: "google",
          });
          break;
        case 'discord':
          web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
            loginProvider: "discord",
          });
          break;
        case 'twitter':
          web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
            loginProvider: "twitter",
          });
          break;
        default:
          throw new Error("Invalid login method");
      }
      
      if (!web3authProvider) {
        throw new Error("Failed to get provider");
      }

      setProvider(web3authProvider);
      
      const userInfo = await web3auth.getUserInfo();
      const rpc = new RPC(web3authProvider);
      const address = await rpc.getAccounts();
      
      const userWithWallet = {
        ...userInfo,
        walletAddress: address[0],
      };
      
      // Store the Web3Auth configuration
      localStorage.setItem('web3authProvider', JSON.stringify({
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
        web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: "0xaa36a7", // Sepolia testnet
          rpcTarget: process.env.NEXT_PUBLIC_RPC_URL,
          displayName: "Ethereum Sepolia Testnet",
          blockExplorer: "https://sepolia.etherscan.io",
          ticker: "ETH",
          tickerName: "Ethereum",
        },
      }));
      
      setIsConnected(true); // Set connected state to true
      setTimeout(() => {
        onSignIn(userWithWallet);
        onClose();
      }, 2000); // Delay closing the modal to show the check mark
    } catch (error) {
      console.error("Login failed:", error);
      setError(`Login failed: ${(error as Error).message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    initWeb3Auth();
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
                  <MotionBox
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <Text color="white" fontSize="2xl" fontWeight="bold" textAlign="center">
                      Connect to Web3
                    </Text>
                    <Text color="white" fontSize="lg" textAlign="center">
                      Web2 Style 🤘
                    </Text>
                  </MotionBox>
                  {error && (
                    <Alert status="error">
                      <AlertIcon />
                      <AlertTitle mr={2}>Error</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  {isLoading ? (
                    <Text color="white" textAlign="center">Loading...</Text>
                  ) : isConnected ? (
                    <MotionBox
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-check-circle"
                        style={{ color: 'green', width: '50px', height: '50px' }}
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </MotionBox>
                  ) : error ? (
                    <Button onClick={handleRetry} colorScheme="blue">
                      Retry
                    </Button>
                  ) : (
                    <>
                      <MotionBox
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Button
                          w="100%"
                          bg="white"
                          color="black"
                          _hover={{ bg: "gray.200" }}
                          onClick={() => login('google')}
                          isDisabled={isLoading}
                          leftIcon={<FaGoogle />}
                        >
                          Sign in with Google
                        </Button>
                        <Button
                          mt={2}
                          w="100%"
                          bg="white"
                          color="black"
                          _hover={{ bg: "gray.200" }}
                          onClick={() => login('apple')}
                          isDisabled={isLoading}
                          leftIcon={<FaApple />}
                        >
                          Sign in with Apple
                        </Button>
                        <Text color="gray.400" textAlign="center" mt={2}>Or</Text>
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
                          isDisabled={isLoading}
                        >
                          Sign in with Email
                        </Button>
                      </MotionBox>
                      <MotionBox
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        mt={4}
                      >
                        <AnimatePresence mode="wait">
                          <MotionBox
                            key={showDollar ? 'dollar' : 'eth'}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Flex alignItems="center">
                              {showDollar ? (
                                <>
                                  <FaDollarSign color="#00FF00" />
                                  <Text ml={2}>USD ⇔ ETH</Text>
                                  <FaEthereum color="#00FFFF" ml={2} />
                                </>
                              ) : (
                                <>
                                  <FaEthereum color="#00FFFF" />
                                  <Text ml={2}>ETH ⇔ USD</Text>
                                  <FaDollarSign color="#00FF00" ml={2} />
                                </>
                              )}
                            </Flex>
                          </MotionBox>
                        </AnimatePresence>
                      </MotionBox>
                    </>
                  )}
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