// src/components/LoadingAnimation.tsx
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaEthereum, FaDollarSign } from 'react-icons/fa';

const MotionBox = motion(Box);

const LoadingAnimation: React.FC = () => {
  return (
    <Flex justify="center" align="center" height="100px">
      <MotionBox
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
        mr={4}
      >
        <FaEthereum size={40} color="#00FFFF" />
      </MotionBox>
      <MotionBox
        animate={{
          scale: [1, 1.2, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
      >
        <FaDollarSign size={40} color="#00FF00" />
      </MotionBox>
    </Flex>
  );
};

export default LoadingAnimation;