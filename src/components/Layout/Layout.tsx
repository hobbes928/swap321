// src/components/Layout/Layout.tsx
import { Box } from '@chakra-ui/react'
// import Header from './Header'
// import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column" className={className}>
      <Box flex={1}>{children}</Box>
    </Box>
  )
}

export default Layout