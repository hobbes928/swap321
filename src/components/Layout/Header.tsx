import React from 'react';
import { Flex, Button, Image, HStack } from '@chakra-ui/react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" w="100%" py={4}>
      <Link href="/">
        <Image src="/logo.png" alt="Logo" boxSize="50px" />
      </Link>
      <HStack spacing={4}>
        <Button variant="outline">Open Order</Button>
        <Button variant="outline">Contacts</Button>
        <Button variant="solid">Sign In</Button>
      </HStack>
    </Flex>
  );
};

export default Header;
