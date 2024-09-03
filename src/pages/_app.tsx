// src/pages/_app.tsx
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import theme from "../styles/theme";
import Layout from "../components/Layout/Layout";
import Header from "@/components/Layout/Header";

// Load the Suisse Int'l font
const suisseIntl = localFont({
  src: [
    {
      path: "../../public/fonts/SuisseIntl-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SuisseIntl-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-suisse-intl",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout className={suisseIntl.variable}>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
