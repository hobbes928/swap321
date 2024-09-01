import { create } from "zustand";

export interface GeneralProps {
  general: {
    walletAddress: String;
    email: String;
  };
  handleGeneral: (data: any) => void;

  web3Auth: {
    provider: any;
  };
  handleWeb3Auth: (data: any) => void;
}

export const useGeneralStore = create<GeneralProps>((set) => ({
  general: {
    walletAddress: "",
    email: "",
  },
  handleGeneral: (data: any) => set({ general: data }),
  web3Auth: {
    provider: undefined,
  },
  handleWeb3Auth: (data: any) => set({ web3Auth: data }),
}));
