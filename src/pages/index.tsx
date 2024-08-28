import React from 'react';
import { Box, VStack, Container, Text, Heading, Image } from '@chakra-ui/react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { motion } from 'framer-motion';
import { FaEthereum, FaDollarSign } from 'react-icons/fa';
import Head from 'next/head';

const MotionBox = motion(Box);

const generateRandomTime = (seed: number): string => {
  const hours = (seed % 24).toString().padStart(2, '0');
  const minutes = ((seed * 60) % 60).toString().padStart(2, '0');
  const seconds = ((seed * 3600) % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const LiveOrder: React.FC<{ index: number }> = ({ index }) => {
  const time = React.useMemo(() => generateRandomTime(index), [index]);
  const isCryptoToFiat = index % 2 === 0;

  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(255,255,255,0.2)" }}
      bg="rgba(60, 60, 60, 0.6)"
      p={4}
      borderRadius="md"
      w="100%"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Text>0x1234...5678</Text>
        <Box display="flex" alignItems="center">
          {isCryptoToFiat ? (
            <>
              <FaEthereum color="#00FFFF" />
              <Text ml={2}>ETH ⇒ USD</Text>
            </>
          ) : (
            <>
              <FaDollarSign color="#00FF00" />
              <Text ml={2}>USD ⇒ ETH</Text>
            </>
          )}
        </Box>
        <Text>{time}</Text>
      </Box>
    </MotionBox>
  );
};

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Swap321 - P2P Crypto Exchange</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box position="relative" minHeight="100vh" overflow="hidden">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient="radial(circle at top left, #800080 0%, #4B0082 25%, #191970 50%, #000000 75%)"
          opacity={0.7}
          zIndex={-2}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxMTEiPjwvcmVjdD4KPC9zdmc+')"
          opacity={0.05}
          zIndex={-1}
        />
        <Container maxW="container.xl" centerContent py={8}>
          <VStack spacing={12} align="center" w="100%">
            <Header />
            <Image src="/logo.png" alt="Swap321 Logo" width={200} height={200} />
            <VStack spacing={6} textAlign="center">
              <Heading as="h1" size="2xl" color="white">
                SWAP321
              </Heading>
              <Text fontSize="xl" color="gray.300">
                P2P Crypto to Fiat and Fiat to Crypto Exchange
              </Text>
            </VStack>
            <Box w="100%" maxW="3xl" textAlign="center">
              <Text fontSize="5xl" fontWeight="bold" color="white" mb={4}>
                $ 8,611,414,816.33
              </Text>
              <Text fontSize="md" color="gray.400">
                Total trading volume across all markets
              </Text>
            </Box>
            <VStack spacing={4} w="100%" maxW="2xl">
              <Text fontSize="xl" fontWeight="bold" color="gray.300">Live Orders</Text>
              {[...Array(5)].map((_, index) => (
                <LiveOrder key={index} index={index} />
              ))}
            </VStack>
          </VStack>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default HomePage;