import React, { useEffect, useState, useCallback } from 'react';
import {
  Box,
  VStack,
  Container,
  Text,
  Heading,
  Button,
  useToast,
  Grid,
  GridItem,
  Avatar,
  Icon,
  Flex,
  Tooltip,
  useClipboard,
  Link,
  Alert,
  AlertIcon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
  HStack,
  Spacer
} from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Layout/Header';
import { FaGoogle, FaWallet, FaExchangeAlt, FaFileSignature, FaCreditCard, FaCopy, FaKey, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import RPC from '../components/Auth/ethersRPC';
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, IProvider } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { motion } from 'framer-motion';

interface User {
  name: string;
  email: string;
  profileImage: string;
  walletAddress: string;
}

const ProfilePage: React.FC = () => {
  const toast = useToast();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [balance, setBalance] = useState<string>('0');
  const [error, setError] = useState<string | null>(null);
  const { hasCopied, onCopy } = useClipboard(user?.walletAddress || '');
  const [selectedNetwork, setSelectedNetwork] = useState('sepolia');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [sendAmount, setSendAmount] = useState('');
  const [assets, setAssets] = useState<any[]>([]);
  const [nfts, setNfts] = useState<any[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [seedPhrase, setSeedPhrase] = useState('');
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [transactions, setTransactions] = useState<any[]>([]);
  const { isOpen: isConfirmOpen, onOpen: onConfirmOpen, onClose: onConfirmClose } = useDisclosure();
  const [gasFee, setGasFee] = useState<string>('0');
  const [totalAmount, setTotalAmount] = useState<string>('0');
  const [isPolling, setIsPolling] = useState(false);

  const pollTransactions = useCallback(async (rpc: RPC) => {
    const pollInterval = 10000; // Poll every 10 seconds
    const maxAttempts = 6; // Poll for 1 minute (6 * 10 seconds)
    let attempts = 0;

    const checkTransactions = async () => {
      if (attempts >= maxAttempts) {
        setIsPolling(false);
        return;
      }

      try {
        const newTransactions = await rpc.getTransactionHistory();
        setTransactions(newTransactions);

        const newBalance = await rpc.getBalance();
        setBalance(newBalance);

        attempts += 1;
        setTimeout(checkTransactions, pollInterval);
      } catch (error) {
        console.error("Error polling transactions:", error);
        setIsPolling(false);
      }
    };

    setIsPolling(true);
    checkTransactions();
  }, []);

  useEffect(() => {
    const initWeb3Auth = async () => {
      const storedUser = localStorage.getItem('user');
      const storedProvider = localStorage.getItem('web3authProvider');
      
      if (!storedUser || !storedProvider) {
        setError("User information or provider not found. Please sign in again.");
        return;
      }

      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser); // Set user immediately

        const providerConfig = JSON.parse(storedProvider);
        
        const chainConfig = {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: "0xaa36a7", // Sepolia testnet
          rpcTarget: process.env.NEXT_PUBLIC_RPC_URL || "",
          displayName: "Ethereum Sepolia Testnet",
          blockExplorer: "https://sepolia.etherscan.io",
          ticker: "ETH",
          tickerName: "Ethereum",
        };

        const privateKeyProvider = new EthereumPrivateKeyProvider({
          config: { chainConfig }
        });

        // Recreate the Web3Auth instance
        const web3authInstance = new Web3Auth({
          clientId: process.env.NEXT_PUBLIC_CLIENT_ID || "",
          web3AuthNetwork: "sapphire_devnet",
          chainConfig,
          privateKeyProvider,
        });

        await web3authInstance.initModal();
        setWeb3auth(web3authInstance);
        
        if (web3authInstance.provider) {
          const rpc = new RPC(web3authInstance.provider as IProvider);
          
          // Fetch data concurrently
          const [address, fetchedBalance, fetchedAssets, fetchedNFTs, fetchedTransactions] = await Promise.all([
            rpc.getAccounts().then(accounts => accounts[0]),
            rpc.getBalance(),
            rpc.getAssets(),
            rpc.getNFTs(),
            rpc.getTransactionHistory()
          ]);

          setUser((prevUser) => ({
            ...prevUser!,
            walletAddress: address,
          }));
          setBalance(fetchedBalance);
          setAssets(fetchedAssets);
          setNfts(fetchedNFTs);
          setTransactions(fetchedTransactions);

          // Start polling for transactions
          pollTransactions(rpc);
        } else {
          throw new Error("Failed to initialize Web3Auth provider");
        }
      } catch (error) {
        console.error("Failed to fetch wallet info:", error);
        setError(`Failed to fetch wallet information: ${(error as Error).message}`);
      }
    };

    initWeb3Auth();
  }, [pollTransactions]);

  const handleCopyWalletAddress = () => {
    onCopy();
    toast({
      title: "Wallet address copied",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleOpenWalletUI = () => {
    toast({
      title: "Wallet UI opened",
      description: "This is a placeholder. Implement actual wallet UI here.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleFiatOnramp = () => {
    toast({
      title: "Fiat Onramp",
      description: "This is a placeholder. Implement fiat onramp functionality here.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleConnectToApplications = () => {
    toast({
      title: "Connect to Applications",
      description: "This is a placeholder. Implement connection to other applications here.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleSignPersonalMessage = async () => {
    try {
      if (!web3auth || !web3auth.provider) {
        throw new Error("Web3Auth not initialized");
      }
      const rpc = new RPC(web3auth.provider as IProvider);
      const message = "Hello, Web3Auth!";
      const signedMessage = await rpc.signMessage(message);
      toast({
        title: "Message Signed",
        description: `Signed message: ${signedMessage}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error Signing Message",
        description: (error as Error).message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleMintNFT = () => {
    toast({
      title: "Mint NFT",
      description: "This is a placeholder. Implement NFT minting functionality here.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleNFTCheckout = () => {
    toast({
      title: "NFT Checkout",
      description: "This is a placeholder. Implement NFT checkout functionality here.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleSignOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('web3authProvider');
    router.push('/');
  };

  const handleNetworkChange = (network: string) => {
    setSelectedNetwork(network);
    // Implement logic to switch networks
  };

  const handleSendCrypto = async () => {
    try {
      if (!web3auth || !web3auth.provider) {
        throw new Error("Web3Auth not initialized");
      }
      const rpc = new RPC(web3auth.provider as IProvider);
      const estimatedGasFee = await rpc.estimateGas(recipientAddress, sendAmount);
      setGasFee(estimatedGasFee);
      setTotalAmount((parseFloat(sendAmount) + parseFloat(estimatedGasFee)).toString());
      onConfirmOpen();
    } catch (error) {
      toast({
        title: "Error estimating gas fee",
        description: (error as Error).message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const confirmSendCrypto = async () => {
    try {
      if (!web3auth || !web3auth.provider) {
        throw new Error("Web3Auth not initialized");
      }
      const rpc = new RPC(web3auth.provider as IProvider);
      const { hash, transaction } = await rpc.sendTransaction(recipientAddress, sendAmount);
      
      // Update the balance immediately
      const newBalance = await rpc.getBalance();
      setBalance(newBalance);

      // Add the new transaction to the state immediately
      setTransactions((prevTransactions) => [
        {
          hash,
          from: transaction.from,
          to: transaction.to,
          value: sendAmount,
          timestamp: new Date().toLocaleString(),
          isIncoming: false,
          isNFT: false,
          nftData: null,
        },
        ...prevTransactions,
      ]);

      // Start polling for transactions after sending
      pollTransactions(rpc);

      toast({
        title: "Transaction sent",
        description: `Transaction hash: ${hash}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      onConfirmClose();
    } catch (error) {
      toast({
        title: "Error sending transaction",
        description: (error as Error).message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleRegisterPasskey = async () => {
    try {
      if (!web3auth || !web3auth.provider) {
        throw new Error("Web3Auth not initialized");
      }
      const rpc = new RPC(web3auth.provider as IProvider);
      await rpc.registerPasskey();
      toast({
        title: "Passkey registered",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error registering passkey",
        description: (error as Error).message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleGetSeedPhrase = async () => {
    try {
      if (!web3auth || !web3auth.provider) {
        throw new Error("Web3Auth not initialized");
      }
      const rpc = new RPC(web3auth.provider as IProvider);
      const phrase = await rpc.getSeedPhrase();
      setSeedPhrase(phrase);
      onOpen();
    } catch (error) {
      console.error("Error getting seed phrase:", error);
      toast({
        title: "Error",
        description: `Failed to get seed phrase: ${(error as Error).message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const refreshTransactions = async () => {
    if (web3auth && web3auth.provider) {
      const rpc = new RPC(web3auth.provider as IProvider);
      setIsPolling(true);
      try {
        const fetchedTransactions = await rpc.getTransactionHistory();
        setTransactions(fetchedTransactions);
        const newBalance = await rpc.getBalance();
        setBalance(newBalance);
      } catch (error) {
        console.error("Error refreshing transactions:", error);
      } finally {
        setIsPolling(false);
      }
    }
  };

  if (error) {
    return (
      <Box minHeight="100vh" bg="black" color="white">
        <Header />
        <Container maxW="container.xl" pt="100px">
          <Alert status="error" mb={4}>
            <AlertIcon />
            {error}
          </Alert>
          <Button onClick={handleSignOut} colorScheme="red">Sign Out</Button>
        </Container>
      </Box>
    );
  }

  if (!user) {
    return (
      <Box minHeight="100vh" bg="black" color="white">
        <Header />
        <Container maxW="container.xl" pt="100px">
          <Text>Loading user information...</Text>
        </Container>
      </Box>
    );
  }

  return (
    <>
      <Head>
        <title>Profile - Swap321</title>
      </Head>
      <Box minHeight="100vh" bg="black" color="white">
        <Header />
        <Container maxW="container.xl" pt="100px">
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={[12, 12, 3]}>
              <VStack spacing={6} align="stretch" bg="gray.800" p={6} borderRadius="md">
                <Avatar size="2xl" src={user.profileImage} alignSelf="center" />
                <Heading size="md" textAlign="center">{user.name}</Heading>
                <Text color="gray.400" textAlign="center">{user.email}</Text>
                <Button leftIcon={<FaGoogle />} variant="outline" size="sm">
                  View User Info
                </Button>
                <Text fontWeight="bold">Wallet Address</Text>
                <Flex alignItems="center">
                  <Text color="brand.cyan" fontSize="sm" isTruncated>{user.walletAddress}</Text>
                  <Tooltip label={hasCopied ? "Copied!" : "Copy address"} placement="top">
                    <Button
                      size="sm"
                      ml={2}
                      onClick={handleCopyWalletAddress}
                      aria-label="Copy wallet address"
                    >
                      <FaCopy />
                    </Button>
                  </Tooltip>
                </Flex>
                <Text fontWeight="bold">Balance</Text>
                <Text color="brand.cyan" fontSize="lg">{balance} ETH</Text>
                <Button colorScheme="purple" size="sm">Register a Passkey</Button>
                <Button onClick={handleSignOut} colorScheme="red" size="sm">Sign Out</Button>
              </VStack>
            </GridItem>
            <GridItem colSpan={[12, 12, 9]}>
              <Tabs variant="enclosed">
                <TabList>
                  <Tab>Wallet</Tab>
                  <Tab>Assets</Tab>
                  <Tab>NFTs</Tab>
                  <Tab>Settings</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <VStack spacing={6} align="stretch">
                      <Box>
                        <Heading size="md" mb={2}>Network</Heading>
                        <Select value={selectedNetwork} onChange={(e) => handleNetworkChange(e.target.value)}>
                          <option value="sepolia">Sepolia Testnet</option>
                          <option value="mainnet">Ethereum Mainnet</option>
                          {/* Add more network options */}
                        </Select>
                      </Box>
                      <Box>
                        <Heading size="md" mb={2}>Send Crypto</Heading>
                        <Input placeholder="Recipient Address" value={recipientAddress} onChange={(e) => setRecipientAddress(e.target.value)} mb={2} />
                        <Input placeholder="Amount" value={sendAmount} onChange={(e) => setSendAmount(e.target.value)} mb={2} />
                        <Button onClick={handleSendCrypto} colorScheme="blue">Send</Button>
                      </Box>
                      <Box>
                        <Heading size="md" mb={2}>Sign Message</Heading>
                        <Button onClick={handleSignPersonalMessage} colorScheme="green">Sign Message</Button>
                      </Box>
                      <Box>
                        <Heading size="md" mb={2}>Transaction History</Heading>
                        <Button onClick={refreshTransactions} isLoading={isPolling}>
                          Refresh Transactions
                        </Button>
                        {transactions.length > 0 ? (
                          <VStack spacing={4} align="stretch">
                            {transactions.map((tx, index) => (
                              <motion.div
                                key={tx.hash}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                              >
                                {tx.isNFT ? (
                                  <Box
                                    borderWidth={1}
                                    borderRadius="md"
                                    p={4}
                                    bg={tx.isIncoming ? "green.100" : "red.100"}
                                  >
                                    <Flex alignItems="center">
                                      <Box mr={4}>
                                        {tx.isIncoming ? (
                                          <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                          >
                                            <FaArrowDown color="green" size={24} />
                                          </motion.div>
                                        ) : (
                                          <motion.div
                                            animate={{ y: [0, 10, 0] }}
                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                          >
                                            <FaArrowUp color="red" size={24} />
                                          </motion.div>
                                        )}
                                      </Box>
                                      <VStack align="start" spacing={0} flex={1}>
                                        <Text fontWeight="bold">{tx.isIncoming ? 'Received' : 'Sent'} NFT</Text>
                                        <Text fontSize="sm">Token ID: {tx.nftData.token_id}</Text>
                                        <Text fontSize="sm">{tx.isIncoming ? 'From' : 'To'}: {tx.isIncoming ? tx.from : tx.to}</Text>
                                        <Text fontSize="xs" color="gray.500">{tx.timestamp}</Text>
                                      </VStack>
                                      {tx.nftData.logo_url && (
                                        <Image src={tx.nftData.logo_url} alt="NFT" boxSize="50px" objectFit="cover" borderRadius="md" />
                                      )}
                                    </Flex>
                                  </Box>
                                ) : (
                                  <Flex
                                    borderWidth={1}
                                    borderRadius="md"
                                    p={4}
                                    alignItems="center"
                                    bg={tx.isIncoming ? "green.100" : "red.100"}
                                  >
                                    <Box mr={4}>
                                      {tx.isIncoming ? (
                                        <motion.div
                                          animate={{ y: [0, -10, 0] }}
                                          transition={{ repeat: Infinity, duration: 1.5 }}
                                        >
                                          <FaArrowDown color="green" size={24} />
                                        </motion.div>
                                      ) : (
                                        <motion.div
                                          animate={{ y: [0, 10, 0] }}
                                          transition={{ repeat: Infinity, duration: 1.5 }}
                                        >
                                          <FaArrowUp color="red" size={24} />
                                        </motion.div>
                                      )}
                                    </Box>
                                    <VStack align="start" spacing={0} flex={1}>
                                      <Text fontWeight="bold">{tx.isIncoming ? 'Received' : 'Sent'} {tx.value} ETH</Text>
                                      <Text fontSize="sm">{tx.isIncoming ? 'From' : 'To'}: {tx.isIncoming ? tx.from : tx.to}</Text>
                                      <Text fontSize="xs" color="gray.500">{tx.timestamp}</Text>
                                    </VStack>
                                    <Link href={`https://sepolia.etherscan.io/tx/${tx.hash}`} isExternal>
                                      <Button size="sm">View</Button>
                                    </Link>
                                  </Flex>
                                )}
                              </motion.div>
                            ))}
                          </VStack>
                        ) : (
                          <Text>No transactions found</Text>
                        )}
                      </Box>
                    </VStack>
                  </TabPanel>
                  <TabPanel>
                    <Heading size="md" mb={4}>Your Assets</Heading>
                    {assets.length > 0 ? (
                      <VStack spacing={4} align="stretch">
                        {assets.map((asset, index) => (
                          <Box key={index} p={4} borderWidth={1} borderRadius="md">
                            <Flex alignItems="center">
                              {asset.logo && <Image src={asset.logo} alt={asset.name} boxSize="32px" mr={2} />}
                              <VStack align="start" spacing={0}>
                                <Text fontWeight="bold">{asset.name} ({asset.symbol})</Text>
                                <Text>Balance: {asset.balance}</Text>
                              </VStack>
                            </Flex>
                          </Box>
                        ))}
                      </VStack>
                    ) : (
                      <Text>No assets found</Text>
                    )}
                  </TabPanel>
                  <TabPanel>
                    <Heading size="md" mb={4}>Your NFTs</Heading>
                    {nfts.length > 0 ? (
                      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
                        {nfts.map((nft, index) => (
                          <Box key={index} borderWidth={1} borderRadius="md" overflow="hidden">
                            <VStack p={4} align="start">
                              <Text fontWeight="bold">{nft.name}</Text>
                              <Text>Token ID: {nft.tokenId}</Text>
                              <Text>Balance: {nft.balance}</Text>
                            </VStack>
                          </Box>
                        ))}
                      </Grid>
                    ) : (
                      <Text>No NFTs found</Text>
                    )}
                  </TabPanel>
                  <TabPanel>
                    <VStack spacing={6} align="stretch">
                      <Box>
                        <Heading size="md" mb={4}>Security</Heading>
                        <HStack spacing={4}>
                          <Button 
                            leftIcon={<FaKey />} 
                            onClick={handleRegisterPasskey} 
                            colorScheme="purple"
                            flex={1}
                          >
                            Register Passkey
                          </Button>
                          <Button 
                            leftIcon={<FaKey />} 
                            onClick={handleGetSeedPhrase} 
                            colorScheme="yellow"
                            flex={1}
                          >
                            Get Seed Phrase
                          </Button>
                        </HStack>
                      </Box>
                    </VStack>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent bg="gray.800" color="white">
          <ModalHeader>Seed Phrase Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb={4} color="red.300">
              Warning: This is educational information about seed phrases, not your actual seed phrase.
            </Text>
            <Text whiteSpace="pre-wrap">{seedPhrase}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isConfirmOpen} onClose={onConfirmClose}>
        <ModalOverlay />
        <ModalContent bg="gray.800" color="white">
          <ModalHeader>Confirm Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Recipient Address: {recipientAddress}</Text>
            <Text>Amount: {sendAmount} ETH</Text>
            <Text>Gas Fee: {gasFee} ETH</Text>
            <Text>Total Deduction: {totalAmount} ETH</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={confirmSendCrypto}>
              Confirm
            </Button>
            <Button variant="ghost" onClick={onConfirmClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePage;