import { create } from "zustand";

export interface GeneralProps {
  general: {
    walletAddress: string;
    email: string;
  };
  handleGeneral: (data: any) => void;
  web3AuthProvider: {
    provider: any;
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
    provider: null,
  },
  handleWeb3AuthProvider: (data: any) => set({ web3AuthProvider: data }),
}));