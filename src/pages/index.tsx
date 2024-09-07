import React, { useEffect, useState } from "react";
import {
  Box,
  VStack,
  Container,
  Text,
  Heading,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Footer from "../components/Layout/Footer";
import Head from "next/head";
import AllOrders from "./orders";
import MyOrders from "./myOrders";

const HomePage: React.FC = () => {
  const [totalVolume, setTotalVolume] = useState(0);

  interface GlobalData {
    data: {
      total_volume: {
        usd: number;
      };
    };
  }

  // API route to fetch total trading volume
  const fetchTotalVolume = async () => {
    try {
      const response = await fetch("https://api.coingecko.com/api/v3/global");
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      const data: GlobalData = await response.json();
      const totalVolume = data.data.total_volume.usd;
      setTotalVolume(totalVolume);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTotalVolume();
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
        {/* <Header /> */}
        <Container maxW="container.xl" centerContent py={8}>
          <VStack spacing={12} align="center" w="100%">
            <Image
              src="/logo.png"
              alt="Swap321 Logo"
              width={200}
              height={200}
            />
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
                {`$${Number(totalVolume).toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })} USD`}
              </Text>
              <Text fontSize="md" color="gray.400">
                Total trading volume across all markets
              </Text>
            </Box>
          </VStack>
        </Container>
        <Tabs isFitted variant="enclosed">
          <TabList>
            <Tab>Live Orders</Tab>
            <Tab>My Orders</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <AllOrders />
            </TabPanel>
            <TabPanel>
              <MyOrders />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Footer />
      </Box>
    </>
  );
};

export default HomePage;
