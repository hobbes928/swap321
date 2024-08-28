// src/components/Layout/Layout.tsx
import { Box } from '@chakra-ui/react'
// import Header from './Header'
// import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      {/* <Header /> */}
      <Box flex={1}>{children}</Box>
      {/* <Footer /> */}
    </Box>
  )
}

export default Layout