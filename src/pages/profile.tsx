// src/pages/profile.tsx
import React from 'react';
import { Box, VStack, Container, Text, Heading, Button, HStack, useToast, Grid, GridItem, Avatar, Icon } from '@chakra-ui/react';
import Head from 'next/head';
import Header from '../components/Layout/Header';
import { FaGoogle, FaWallet, FaExchangeAlt, FaFileSignature, FaCreditCard } from 'react-icons/fa';
import { MdNat } from 'react-icons/md';

const ProfilePage: React.FC = () => {
  const toast = useToast();

  // This would be fetched from your authentication state
  const user = {
    name: 'james llc',
    email: 'jamesmurraylic@gmail.com',
    walletAddress: '0x5d13c346...798bbb',
    profileImage: 'https://via.placeholder.com/150',
  };

  const handleSave = () => {
    // Here you would update the user's profile
    toast({
      title: "Profile updated",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      <Head>
        <title>Profile - Swap321</title>
      </Head>
      <Box minHeight="100vh" bg="black" color="white">
        <Header />
        <Container maxW="container.xl" pt="100px">
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={3}>
              <VStack spacing={6} align="stretch" bg="gray.800" p={6} borderRadius="md">
                <Avatar size="2xl" src={user.profileImage} alignSelf="center" />
                <Heading size="md" textAlign="center">{user.name}</Heading>
                <Text color="gray.400" textAlign="center">{user.email}</Text>
                <Button leftIcon={<FaGoogle />} variant="outline" size="sm">
                  View User Info
                </Button>
                <Text fontWeight="bold">Wallet Address</Text>
                <Text color="brand.cyan">{user.walletAddress}</Text>
                <Button colorScheme="purple" size="sm">Register a Passkey</Button>
              </VStack>
            </GridItem>
            <GridItem colSpan={9}>
              <VStack spacing={8} align="stretch">
                <Box bg="gray.800" p={6} borderRadius="md">
                  <Heading size="md" mb={4}>Wallet Services</Heading>
                  <Text mb={4}>Production-ready wallet UI</Text>
                  <VStack spacing={4} align="stretch">
                    <Button leftIcon={<FaWallet />} variant="outline" justifyContent="flex-start">Open Wallet UI</Button>
                    <Button leftIcon={<FaExchangeAlt />} variant="outline" justifyContent="flex-start">Use Fiat Onramp</Button>
                    <Button leftIcon={<FaFileSignature />} variant="outline" justifyContent="flex-start">Connect to Applications</Button>
                    <Button leftIcon={<FaFileSignature />} variant="outline" justifyContent="flex-start">Sign Personal Message</Button>
                  </VStack>
                </Box>
                <Box bg="gray.800" p={6} borderRadius="md">
                  <Heading size="md" mb={4}>NFT Services</Heading>
                  <Text mb={4}>Let your users to claim or buy NFT in seconds</Text>
                  <Box 
                    borderWidth={2} 
                    borderColor="purple.500" 
                    borderRadius="md" 
                    p={4} 
                    mb={4}
                    bg="purple.900"
                  >
                    <Icon as={MdNat} boxSize={16} color="purple.300" />
                  </Box>
                  <VStack spacing={4} align="stretch">
                    <Button leftIcon={<MdNat />} variant="outline" justifyContent="flex-start">Mint free NFT airdrop</Button>
                    <Button leftIcon={<FaCreditCard />} variant="outline" justifyContent="flex-start">NFT Checkout</Button>
                  </VStack>
                  <Text color="blue.300" mt={4}>Try with our test credit cards</Text>
                </Box>
                <Box bg="gray.800" p={6} borderRadius="md">
                  <Heading size="md" mb={4}>Experience Web3Auth, first hand</Heading>
                  <Text mb={4}>Browse our full suite of features for your dApp with our docs. Access codes examples for these features by visiting our playground.</Text>
                  <VStack spacing={4} align="stretch">
                    <Button colorScheme="blue">Read our docs</Button>
                    <Button colorScheme="green">Checkout Live Integrations</Button>
                  </VStack>
                </Box>
                <Box bg="gray.800" p={6} borderRadius="md">
                  <Heading size="md" mb={4}>Have any questions?</Heading>
                  <Button colorScheme="purple">Schedule a demo call with our team today</Button>
                </Box>
              </VStack>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProfilePage;