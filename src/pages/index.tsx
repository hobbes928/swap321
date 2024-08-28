import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const HomePage: React.FC = () => {
  return (
    <Box p={8}>
      <Heading mb={4}>Welcome to Our Exchange</Heading>
      <Text>This is the home page of our cryptocurrency exchange platform.</Text>
    </Box>
  );
};

export default HomePage;
