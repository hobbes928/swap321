// src/components/Auth/SignInModal.tsx
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: (user: any) => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose, onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleSignIn = async () => {
    // Here you would integrate with Web3Auth
    // For now, we'll just simulate a sign-in
    try {
      // Simulated sign-in
      const user = { email, id: 'simulated-user-id' };
      onSignIn(user);
      onClose();
      toast({
        title: "Signed in successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Sign in failed",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent bg="rgba(0, 0, 0, 0.8)" borderColor="brand.purple" borderWidth={2}>
        <ModalHeader color="white">Sign In / Sign Up</ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody>
          <VStack spacing={4}>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              bg="rgba(60, 60, 60, 0.6)"
              color="white"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              bg="rgba(60, 60, 60, 0.6)"
              color="white"
            />
            <Button colorScheme="purple" onClick={handleSignIn} width="100%">
              Sign In / Sign Up
            </Button>
            <Text color="white">Or sign in with:</Text>
            <Button leftIcon={<FaGoogle />} colorScheme="red" width="100%">
              Google
            </Button>
            <Button leftIcon={<FaFacebook />} colorScheme="facebook" width="100%">
              Facebook
            </Button>
            <Button leftIcon={<FaTwitter />} colorScheme="twitter" width="100%">
              Twitter
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SignInModal;