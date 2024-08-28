// src/styles/theme.ts
import { extendTheme } from '@chakra-ui/react';
import { keyframes } from '@chakra-ui/react';

const neonPulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const theme = extendTheme({
  colors: {
    brand: {
      purple: '#800080',
      indigo: '#4B0082',
      darkBlue: '#191970',
      cyan: '#00FFFF',
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      variants: {
        solid: {
          bg: 'brand.purple',
          color: 'white',
          _hover: {
            bg: 'brand.indigo',
          },
        },
        outline: {
          borderColor: 'brand.cyan',
          color: 'brand.cyan',
          _hover: {
            bg: 'brand.cyan',
            color: 'black',
          },
        },
      },
    },
    Text: {
      baseStyle: {
        color: 'white',
      },
    },
  },
  animations: {
    neonPulse: `${neonPulse} 2s infinite`,
  },
});

export default theme;