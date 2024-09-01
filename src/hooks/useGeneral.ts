import { create } from "zustand";

export interface GeneralProps {
  general: {
    walletAddress: String;
    email: String;
  };
  handleGeneral: (data: any) => void;
}

export const useGeneralStore = create<GeneralProps>((set) => ({
  general: {
    walletAddress: "",
    email: "",
  },
  handleGeneral: (data: any) => set({ general: data }),
}));
