import type { IProvider } from "@web3auth/base";
import { ethers } from "ethers";

export class RPC {
  private provider: IProvider;

  constructor(provider: IProvider) {
    this.provider = provider;
  }

  async getChainId(): Promise<string> {
    try {
      const ethersProvider = new ethers.BrowserProvider(this.provider as any);
      const network = await ethersProvider.getNetwork();
      return network.chainId.toString();
    } catch (error) {
      return error as string;
    }
  }

  async getAccounts(): Promise<string[]> {
    try {
      const ethersProvider = new ethers.BrowserProvider(this.provider as any);
      const signer = await ethersProvider.getSigner();
      const address = await signer.getAddress();
      return [address];
    } catch (error) {
      return [];
    }
  }

  async getBalance(): Promise<string> {
    try {
      const ethersProvider = new ethers.BrowserProvider(this.provider as any);
      const signer = await ethersProvider.getSigner();
      const address = await signer.getAddress();
      const balance = await ethersProvider.getBalance(address);
      return ethers.formatEther(balance);
    } catch (error) {
      return error as string;
    }
  }

  async signMessage(message: string): Promise<string> {
    try {
      const ethersProvider = new ethers.BrowserProvider(this.provider as any);
      const signer = await ethersProvider.getSigner();
      return await signer.signMessage(message);
    } catch (error) {
      return error as string;
    }
  }

  async sendTransaction(destination: string, amount: string): Promise<string> {
    try {
      const ethersProvider = new ethers.BrowserProvider(this.provider as any);
      const signer = await ethersProvider.getSigner();
      const transaction = await signer.sendTransaction({
        to: destination,
        value: ethers.parseEther(amount),
      });
      return transaction.hash;
    } catch (error) {
      return error as string;
    }
  }
}

export default RPC;