import { useState, useEffect, useCallback } from 'react';
import { Client } from '@xmtp/xmtp-js';
import { useGeneralStore, GeneralProps } from './useGeneral';
import { ethers } from 'ethers';

export const useXmtp = () => {
  const [client, setClient] = useState<Client | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const web3AuthProvider = useGeneralStore((state: GeneralProps) => state.web3AuthProvider);

  const initializeXmtp = useCallback(async () => {
    if (!web3AuthProvider || !web3AuthProvider.provider) {
      console.log('Web3Auth provider not available');
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(web3AuthProvider.provider);
      const signer = await provider.getSigner();
      const xmtp = await Client.create(signer, { env: 'dev' });
      setClient(xmtp);
      setIsInitialized(true);
      console.log('XMTP client initialized successfully');
    } catch (error) {
      console.error('Error initializing XMTP client:', error);
    }
  }, [web3AuthProvider]);

  useEffect(() => {
    if (web3AuthProvider && web3AuthProvider.provider && !isInitialized) {
      initializeXmtp();
    }
  }, [web3AuthProvider, isInitialized, initializeXmtp]);

  return { client, isInitialized };
};