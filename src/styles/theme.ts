// src/styles/theme.ts
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#E6FFFA',
      100: '#B2F5EA',
      500: '#319795',
      900: '#234E52',
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      variants: {
        solid: (props: { colorMode: string }) => ({
          bg: props.colorMode === 'dark' ? 'brand.500' : 'brand.100',
          color: props.colorMode === 'dark' ? 'white' : 'brand.900',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.600' : 'brand.200',
          },
        }),
      },
    },
  },
})

export default theme