import { IProvider } from "@web3auth/base";
import { Eip1193Provider } from "ethers";
import { create } from "zustand";

export interface GeneralProps {
  general: {
    walletAddress: String;
    email: String;
  };
  handleGeneral: (data: any) => void;
  web3AuthProvider: {
    provider: Eip1193Provider;
  };
  handleWeb3AuthProvider: (data: any) => void;
}

export const useGeneralStore = create<GeneralProps>((set) => ({
  general: {
    walletAddress: "",
    email: "",
  },
  handleGeneral: (data: any) => set({ general: data }),
  web3AuthProvider: {
    provider: {} as Eip1193Provider,
  },
  handleWeb3AuthProvider: (data: any) => set({ web3AuthProvider: data }),
}));