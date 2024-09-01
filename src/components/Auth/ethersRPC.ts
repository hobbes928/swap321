import type { IProvider } from "@web3auth/base";
import { ethers } from "ethers";
import axios from "axios"; // You'll need to install axios: npm install axios

export class RPC {
  private provider: IProvider;

  constructor(provider: IProvider) {
    this.provider = provider;
  }
  private getEthersProvider() {
    return new ethers.BrowserProvider(this.provider as any);
  }

  async getChainId(): Promise<string> {
    try {
      const ethersProvider = this.getEthersProvider();
      const network = await ethersProvider.getNetwork();
      return network.chainId.toString();
    } catch (error) {
      console.error("Error in getChainId:", error);
      throw new Error(`Failed to get chain ID: ${(error as Error).message}`);
    }
  }

  async getAccounts(): Promise<string[]> {
    try {
      const ethersProvider = this.getEthersProvider();
      const signer = await ethersProvider.getSigner();
      const address = await signer.getAddress();
      return [address];
    } catch (error) {
      console.error("Error in getAccounts:", error);
      throw new Error(`Failed to get accounts: ${(error as Error).message}`);
    }
  }

  async getBalance(): Promise<string> {
    try {
      const ethersProvider = this.getEthersProvider();
      const signer = await ethersProvider.getSigner();
      const address = await signer.getAddress();
      const balance = await ethersProvider.getBalance(address);
      return ethers.formatEther(balance);
    } catch (error) {
      console.error("Error in getBalance:", error);
      throw new Error(`Failed to get balance: ${(error as Error).message}`);
    }
  }

  async signMessage(message: string): Promise<string> {
    try {
      const ethersProvider = this.getEthersProvider();
      const signer = await ethersProvider.getSigner();
      return await signer.signMessage(message);
    } catch (error) {
      console.error("Error in signMessage:", error);
      throw new Error(`Failed to sign message: ${(error as Error).message}`);
    }
  }

  async sendTransaction(destination: string, amount: string): Promise<{ hash: string, transaction: any }> {
    try {
      const ethersProvider = this.getEthersProvider();
      const signer = await ethersProvider.getSigner();
      const transaction = await signer.sendTransaction({
        to: destination,
        value: ethers.parseEther(amount),
      });
      return { hash: transaction.hash, transaction };
    } catch (error) {
      console.error("Error in sendTransaction:", error);
      throw new Error(`Failed to send transaction: ${(error as Error).message}`);
    }
  }

  async estimateGas(destination: string, amount: string): Promise<string> {
    try {
      const ethersProvider = this.getEthersProvider();
      const signer = await ethersProvider.getSigner();
      const gasEstimate = await signer.estimateGas({
        to: destination,
        value: ethers.parseEther(amount),
      });
      return ethers.formatUnits(gasEstimate, "gwei");
    } catch (error) {
      console.error("Error in estimateGas:", error);
      throw new Error(`Failed to estimate gas: ${(error as Error).message}`);
    }
  }

  // New methods for assets and NFTs
  async getAssets(): Promise<any[]> {
    try {
      const ethersProvider = this.getEthersProvider();
      const signer = await ethersProvider.getSigner();
      const address = await signer.getAddress();
      
      const COVALENT_API_KEY = process.env.NEXT_PUBLIC_COVALENT_API_KEY;
      if (!COVALENT_API_KEY) {
        throw new Error("Covalent API key is not set");
      }

      const chainId = 11155111; // Sepolia testnet
      const response = await axios.get(
        `https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/`,
        {
          headers: {
            'Authorization': `Bearer ${COVALENT_API_KEY}`
          }
        }
      );

      return response.data.data.items.map((item: any) => ({
        name: item.contract_name,
        symbol: item.contract_ticker_symbol,
        balance: ethers.formatUnits(item.balance, item.contract_decimals),
        logo: item.logo_url
      }));
    } catch (error) {
      console.error("Error in getAssets:", error);
      throw error;
    }
  }

  async getNFTs(): Promise<any[]> {
    try {
      const ethersProvider = this.getEthersProvider();
      const signer = await ethersProvider.getSigner();
      const address = await signer.getAddress();
      
      const COVALENT_API_KEY = process.env.NEXT_PUBLIC_COVALENT_API_KEY;
      if (!COVALENT_API_KEY) {
        throw new Error("Covalent API key is not set");
      }

      const chainId = 11155111; // Sepolia testnet
      const response = await axios.get(
        `https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?nft=true`,
        {
          headers: {
            'Authorization': `Bearer ${COVALENT_API_KEY}`
          }
        }
      );

      return response.data.data.items
        .filter((item: any) => item.type === 'nft')
        .map((item: any) => ({
          name: item.contract_name,
          symbol: item.contract_ticker_symbol,
          balance: item.balance,
          tokenId: item.token_id,
          contractAddress: item.contract_address
        }));
    } catch (error) {
      console.error("Error in getNFTs:", error);
      throw error;
    }
  }

  // New methods for passkey and seed phrase
  async registerPasskey(): Promise<void> {
    try {
      // Check if the browser supports WebAuthn
      if (!window.PublicKeyCredential) {
        throw new Error("WebAuthn is not supported in this browser");
      }

      // Generate a random challenge
      const challenge = new Uint8Array(32);
      crypto.getRandomValues(challenge);

      // Create PublicKeyCredentialCreationOptions
      const publicKeyCredentialCreationOptions: PublicKeyCredentialCreationOptions = {
        challenge,
        rp: {
          name: "Your App Name",
          id: window.location.hostname
        },
        user: {
          id: new Uint8Array(16), // Generate a unique user ID
          name: "user@example.com", // Use the user's email or username
          displayName: "User" // Use the user's display name
        },
        pubKeyCredParams: [
          { type: "public-key", alg: -7 }, // ES256
          { type: "public-key", alg: -257 } // RS256
        ],
        authenticatorSelection: {
          authenticatorAttachment: "platform",
          userVerification: "required"
        },
        timeout: 60000,
        attestation: "direct"
      };

      // Create the credential
      const credential = await navigator.credentials.create({
        publicKey: publicKeyCredentialCreationOptions
      });

      if (credential) {
        // Send the credential to your server for storage and association with the user's account
        // This step depends on your backend implementation
        console.log("Passkey registered successfully");
      } else {
        throw new Error("Failed to create credential");
      }
    } catch (error) {
      console.error("Error in registerPasskey:", error);
      throw new Error(`Failed to register passkey: ${(error as Error).message}`);
    }
  }

  async getSeedPhrase(): Promise<string> {
    try {
      // WARNING: This is highly insecure and should never be used in a production environment
      if (!this.provider.request) {
        throw new Error("Provider does not support request method");
      }
      const seedPhrase = await this.provider.request({
        method: "eth_private_key",
      });
      
      if (typeof seedPhrase !== 'string') {
        throw new Error("Failed to retrieve seed phrase");
      }
      
      return seedPhrase;
    } catch (error) {
      console.error("Error in getSeedPhrase:", error);
      throw new Error(`Failed to get seed phrase: ${(error as Error).message}`);
    }
  }

  async getTransactionHistory(): Promise<any[]> {
    try {
      const ethersProvider = this.getEthersProvider();
      const signer = await ethersProvider.getSigner();
      const address = await signer.getAddress();
      
      const COVALENT_API_KEY = process.env.NEXT_PUBLIC_COVALENT_API_KEY;
      if (!COVALENT_API_KEY) {
        throw new Error("Covalent API key is not set");
      }

      const chainId = 11155111; // Sepolia testnet
      const response = await axios.get(
        `https://api.covalenthq.com/v1/${chainId}/address/${address}/transactions_v2/`,
        {
          headers: {
            'Authorization': `Bearer ${COVALENT_API_KEY}`
          }
        }
      );

      return response.data.data.items.map((item: any) => {
        const isNFT = item.transfers && item.transfers.some((transfer: any) => transfer.contract_ticker_symbol === 'NFT');
        return {
          hash: item.tx_hash,
          from: item.from_address,
          to: item.to_address,
          value: ethers.formatEther(item.value),
          timestamp: new Date(item.block_signed_at).toLocaleString(),
          isIncoming: item.to_address.toLowerCase() === address.toLowerCase(),
          isNFT: isNFT,
          nftData: isNFT ? item.transfers.find((transfer: any) => transfer.contract_ticker_symbol === 'NFT') : null
        };
      });
    } catch (error) {
      console.error("Error in getTransactionHistory:", error);
      throw error;
    }
  }

  async getLatestTransactions(lastKnownTxHash: string | null): Promise<any[]> {
    try {
      const ethersProvider = this.getEthersProvider();
      const signer = await ethersProvider.getSigner();
      const address = await signer.getAddress();
      
      const COVALENT_API_KEY = process.env.NEXT_PUBLIC_COVALENT_API_KEY;
      if (!COVALENT_API_KEY) {
        throw new Error("Covalent API key is not set");
      }

      const chainId = 11155111; // Sepolia testnet
      const response = await axios.get(
        `https://api.covalenthq.com/v1/${chainId}/address/${address}/transactions_v2/?page-size=10`,
        {
          headers: {
            'Authorization': `Bearer ${COVALENT_API_KEY}`
          }
        }
      );

      const newTransactions = response.data.data.items
        .filter((item: any) => item.tx_hash !== lastKnownTxHash)
        .map((item: any, index: number) => {
          const isNFT = item.transfers && item.transfers.some((transfer: any) => transfer.contract_ticker_symbol === 'NFT');
          return {
            id: `${item.tx_hash}-${item.block_height}-${index}`, // Create a unique id
            hash: item.tx_hash,
            from: item.from_address,
            to: item.to_address,
            value: ethers.formatEther(item.value),
            timestamp: new Date(item.block_signed_at).toLocaleString(),
            isIncoming: item.to_address.toLowerCase() === address.toLowerCase(),
            isNFT: isNFT,
            nftData: isNFT ? item.transfers.find((transfer: any) => transfer.contract_ticker_symbol === 'NFT') : null
          };
        });

      return newTransactions;
    } catch (error) {
      console.error("Error in getLatestTransactions:", error);
      throw error;
    }
  }
}

export default RPC;