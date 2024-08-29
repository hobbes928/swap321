// src/pages/profile.tsx
import React from 'react';
import { Box, VStack, Container, Text, Heading, Input, Button, HStack, useToast } from '@chakra-ui/react';
import Head from 'next/head';
import Header from '../components/Layout/Header';

const ProfilePage: React.FC = () => {
  const toast = useToast();

  // This would be fetched from your authentication state
  const user = {
    email: 'user@example.com',
    walletAddress: '0x1234...5678',
    paypalEmail: '',
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
        <Container maxW="container.md" pt="100px">
          <VStack spacing={8} align="stretch">
            <Heading>Your Profile</Heading>
            <VStack spacing={4} align="stretch">
              <Box>
                <Text mb={2}>Email</Text>
                <Input value={user.email} isReadOnly bg="rgba(60, 60, 60, 0.6)" />
              </Box>
              <Box>
                <Text mb={2}>Wallet Address</Text>
                <Input value={user.walletAddress} isReadOnly bg="rgba(60, 60, 60, 0.6)" />
              </Box>
              <Box>
                <Text mb={2}>PayPal Email</Text>
                <Input 
                  placeholder="Enter your PayPal email"
                  defaultValue={user.paypalEmail}
                  bg="rgba(60, 60, 60, 0.6)"
                />
              </Box>
              <Box>
                <Text mb={2}>Supported Blockchain Networks</Text>
                <Text>Ethereum, Binance Smart Chain, Polygon, Avalanche</Text>
              </Box>
            </VStack>
            <HStack justifyContent="flex-end">
              <Button colorScheme="purple" onClick={handleSave}>Save Changes</Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default ProfilePage;