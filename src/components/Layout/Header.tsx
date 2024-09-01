// src/components/Layout/Header.tsx
import React, { useState, useEffect } from 'react';
import { Flex, Button, Image, HStack, Box, useDisclosure, Menu, MenuButton, MenuList, MenuItem, Avatar, useToast } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import OpenOrderModal from '../Exchange/OrderForm';
import SignInModal from '../Auth/SignInModal';
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { GeneralProps, useGeneralStore } from '@/hooks/useGeneral';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const { isOpen: isOpenOrderOpen, onOpen: onOpenOrderOpen, onClose: onCloseOrderOpen } = useDisclosure();
  const { isOpen: isSignInOpen, onOpen: onOpenSignIn, onClose: onCloseSignIn } = useDisclosure();
  const router = useRouter();
  const toast = useToast();
  const handleGeneral = useGeneralStore(
    (state: GeneralProps) => state.handleGeneral
  );

  const general = useGeneralStore(
    (state: GeneralProps) => state.general
  );

  const handleOpenOrderModal = () => {
    if(!general.walletAddress){
      return toast({
        title: "Wallet Address",
        description: "Please connect your wallet.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    onOpenOrderOpen()
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedStoredUser = JSON.parse(storedUser)
      setUser(parsedStoredUser);
      handleGeneral({
        walletAddress: parsedStoredUser?.walletAddress || "",
        email: parsedStoredUser?.email || "",
      })
    }
  }, []);

  const handleSignIn = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    handleGeneral({
      walletAddress: userData?.walletAddress || "",
      email: userData?.email || "",
    })
  };

  const handleSignOut = async () => {
    try {
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

      const web3AuthInstance = new Web3Auth({
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID || "",
        web3AuthNetwork: "sapphire_devnet",
        chainConfig,
        privateKeyProvider,
      });

      await web3AuthInstance.initModal();
      if (web3AuthInstance.connected) {
        await web3AuthInstance.logout();
      }
    } catch (error) {
      console.error("Error during sign out:", error);
    }

    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('web3authProvider');
    handleGeneral({
      walletAddress: "",
      email: "",
    })
  };

  return (
    <>
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        transition="background-color 0.3s, backdrop-filter 0.3s"
        bg={isScrolled ? 'rgba(0, 0, 0, 0.5)' : 'transparent'}
        backdropFilter={isScrolled ? 'blur(10px)' : 'none'}
      >
        <Flex justifyContent="space-between" alignItems="center" w="100%" maxW="container.xl" mx="auto" py={4} px={4}>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" boxSize="50px" />
          </Link>
          <HStack spacing={4}>
            <Button variant="outline" onClick={handleOpenOrderModal}>Open Order</Button>
            <Button variant="outline">Contacts</Button>
            {user ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar size={'sm'} src={user.profileImage} />
                </MenuButton>
                <MenuList
                  bg="rgba(0, 0, 0, 0.8)"
                  borderColor="brand.purple"
                  borderWidth={1}
                  boxShadow="0 0 10px rgba(128, 0, 128, 0.5)"
                >
                  <MenuItem
                    onClick={() => router.push('/profile')}
                    _hover={{ bg: 'rgba(128, 0, 128, 0.2)' }}
                    _focus={{ bg: 'rgba(128, 0, 128, 0.2)' }}
                    bg="transparent"
                    color="white"
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={handleSignOut}
                    _hover={{ bg: 'rgba(128, 0, 128, 0.2)' }}
                    _focus={{ bg: 'rgba(128, 0, 128, 0.2)' }}
                    bg="transparent"
                    color="white"
                  >
                    Sign Out
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Button variant="solid" onClick={onOpenSignIn}>Sign In</Button>
            )}
          </HStack>
        </Flex>
      </Box>
      <OpenOrderModal isOpen={isOpenOrderOpen} onClose={onCloseOrderOpen} />
      <SignInModal isOpen={isSignInOpen} onClose={onCloseSignIn} onSignIn={handleSignIn} />
    </>
  );
};

export default Header;