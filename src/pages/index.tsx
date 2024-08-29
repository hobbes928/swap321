import React, { useRef, useEffect, useState } from 'react';
import { Box, VStack, Container, Text, Heading, Image, Flex } from '@chakra-ui/react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { motion, useAnimation } from 'framer-motion';
import { FaEthereum, FaDollarSign } from 'react-icons/fa';
import Head from 'next/head';

const MotionBox = motion(Box);

const generateRandomTime = (seed: number): string => {
  const hours = (seed % 24).toString().padStart(2, '0');
  const minutes = ((seed * 60) % 60).toString().padStart(2, '0');
  const seconds = ((seed * 3600) % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const LiveOrder: React.FC<{ index: number; opacity: number }> = ({ index, opacity }) => {
  const time = React.useMemo(() => generateRandomTime(index), [index]);
  const isCryptoToFiat = index % 2 === 0;
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity, y: 0 });
  }, [opacity, controls]);

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.2, delay: index * 0.03 }} // Faster animation and shorter delay
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(255,255,255,0.2)" }}
      bg="rgba(60, 60, 60, 0.6)"
      p={4}
      borderRadius="md"
      w="100%"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text>0x1234...5678</Text>
        <Flex alignItems="center">
          {isCryptoToFiat ? (
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
        <Text>{time}</Text>
      </Flex>
    </MotionBox>
  );
};

const HomePage: React.FC = () => {
  const [orders, setOrders] = useState(Array(20).fill(0));
  const ordersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ordersRef.current) {
        const { top, bottom } = ordersRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        setOrders(prevOrders => 
          prevOrders.map((_, index) => {
            const elementTop = top + index * 76; // Approximate height of each order
            const elementBottom = elementTop + 76;

            if (elementTop > viewportHeight || elementBottom < 0) {
              return 0; // Fully faded out
            } else {
              const visibilityPercentage = Math.min(1, (viewportHeight - elementTop) / 76);
              return Math.max(0, visibilityPercentage); // Smoother fade-in
            }
          })
        );
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set initial visibility
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Swap321 - P2P Crypto Exchange</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box position="relative" minHeight="100vh" overflow="hidden">
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient="radial(circle at top left, #800080 0%, #4B0082 25%, #191970 50%, #000000 75%)"
          opacity={0.7}
          zIndex={-2}
        />
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxMTEiPjwvcmVjdD4KPC9zdmc+')"
          opacity={0.05}
          zIndex={-1}
        />
        <Header />
        <Container maxW="container.xl" centerContent py={8}>
          <VStack spacing={12} align="center" w="100%">
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
          </VStack>
        </Container>
        <VStack ref={ordersRef} spacing={4} w="100%" maxW="2xl" mx="auto" pb="100px">
          <Text fontSize="xl" fontWeight="bold" color="gray.300">Live Orders</Text>
          {orders.map((opacity, index) => (
            <LiveOrder key={index} index={index} opacity={opacity} />
          ))}
        </VStack>
        <Footer />
      </Box>
    </>
  );
};

export default HomePage;