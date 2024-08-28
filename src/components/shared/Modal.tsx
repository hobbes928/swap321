import React from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  Text,
  HStack,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaEthereum } from 'react-icons/fa';

const MotionFlex = motion(Flex);

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const LiveOrder: React.FC<{ index: number }> = ({ index }) => {
  return (
    <MotionFlex
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
      bg="rgba(60, 60, 60, 0.6)"
      p={4}
      borderRadius="md"
      w="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text>0x1234...5678</Text>
      <HStack>
        <FaEthereum />
        <Text>ETH ⇒ USD</Text>
      </HStack>
      <Text>{`${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60)}:${Math.floor(Math.random() * 60)}`}</Text>
    </MotionFlex>
  );
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title }) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="black" borderColor="brand.neonPurple" borderWidth={2}>
        <ModalHeader color="brand.neonPink">{title}</ModalHeader>
        <ModalCloseButton color="brand.neonBlue" />
        <ModalBody>
          <VStack spacing={4}>
            <Text fontSize="xl" fontWeight="bold" color="brand.neonGreen">Live Orders</Text>
            {[...Array(5)].map((_, index) => (
              <LiveOrder key={index} index={index} />
            ))}
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="purple" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
