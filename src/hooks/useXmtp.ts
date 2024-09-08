import { useState, useEffect, useCallback } from "react";
import { Client } from "@xmtp/xmtp-js";
import { useGeneralStore, GeneralProps } from "./useGeneral";
import { ethers } from "ethers";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { Web3Auth } from "@web3auth/modal";

export const useXmtp = () => {
  const [client, setClient] = useState<Client | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  // const web3AuthProvider = useGeneralStore(
  //   (state: GeneralProps) => state.web3AuthProvider
  // );

  const initWeb3AuthFromLocalStorage = async () => {
    try {
      const chainConfig = {
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: "0xaa36a7", // Sepolia testnet
        rpcTarget: process.env.NEXT_PUBLIC_RPC_URL || "",
        displayName: "Ethereum Sepolia Testnet",
        blockExplorer: "https://sepolia.etherscan.io",
        ticker: "ETH",
        tickerName: "Ethereum",
      };

      const privateKeyProvider = new EthereumPrivateKeyProvider({
        config: { chainConfig },
      });

      // Recreate the Web3Auth instance
      const web3authInstance = new Web3Auth({
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID || "",
        web3AuthNetwork: "sapphire_devnet",
        chainConfig,
        privateKeyProvider,
      });

      await web3authInstance.initModal();
      return web3authInstance.provider;
    } catch (error) {
      console.error("Failed to fetch wallet info:", error);
    }
  };

  const initializeXmtp = useCallback(async () => {
    const web3AuthProvider = await initWeb3AuthFromLocalStorage();
    if (!web3AuthProvider) {
      console.log("Web3Auth provider not available");
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(web3AuthProvider);
      const signer = await provider.getSigner();
      const xmtp = await Client.create(signer, { env: "dev" });
      setClient(xmtp);
      setIsInitialized(true);
      console.log("XMTP client initialized successfully");
    } catch (error) {
      console.error("Error initializing XMTP client:", error);
    }
  }, []);

  useEffect(() => {
    initializeXmtp();
  }, []);

  return { client, isInitialized };
};
