import React from 'react';
import { Box, Container, Text, HStack, Link, Icon } from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <Box as="footer" width="100%" bg="black" py={4} position="fixed" bottom={0}>
      <Container maxW="container.xl">
        <HStack justifyContent="space-between" alignItems="center">
          <Text color="brand.neonBlue">&copy; 2023 Your Company Name. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="https://twitter.com" isExternal>
              <Icon as={FaTwitter} w={6} h={6} color="brand.neonPurple" />
            </Link>
            <Link href="https://facebook.com" isExternal>
              <Icon as={FaFacebook} w={6} h={6} color="brand.neonPurple" />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <Icon as={FaInstagram} w={6} h={6} color="brand.neonPurple" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <Icon as={FaLinkedin} w={6} h={6} color="brand.neonPurple" />
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;
