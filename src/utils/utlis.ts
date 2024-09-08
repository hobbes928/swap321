import { ethers } from "ethers";
import EscrowABI from "@/contracts/artifacts/Escrow.json";
import { useCallback } from "react";
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { Web3Auth } from "@web3auth/modal";

/**
 * Slices an Ethereum address to a shorter format.
 * @param {string} address - The full Ethereum address.
 * @returns {string} - The shortened Ethereum address.
 * @throws {Error} - If the input address is invalid.
 */
export function sliceAddress(address: string): string {
  if (!address || address.length !== 42) {
    console.error("Invalid Ethereum address");
    return "0x000...000";
  }

  const start = address.slice(0, 6); // First 6 characters
  const end = address.slice(-4); // Last 4 characters

  return `${start}...${end}`;
}

export const escrowContractFunction = async (web3AuthProvider: any) => {
  try {
    console.log("before provider");
    const provider = new ethers.BrowserProvider(web3AuthProvider);
    console.log("after provider");
    const signer = await provider.getSigner();
    console.log("signer", signer);
    const contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_ESCROW_CONTRACT_ADDRESS!,
      EscrowABI,
      signer
    );
    console.log("contract", contract);
    return contract;
  } catch (error) {
    console.error("Failed to initialize the contract:", error);
  }
};


 