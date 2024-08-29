// src/components/Layout/Header.tsx
import React, { useState, useEffect } from 'react';
import { Flex, Button, Image, HStack, Box, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';
import OpenOrderModal from '../Exchange/OrderForm';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <Button variant="outline" onClick={onOpen}>Open Order</Button>
            <Button variant="outline">Contacts</Button>
            <Button variant="solid">Sign In</Button>
          </HStack>
        </Flex>
      </Box>
      <OpenOrderModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;