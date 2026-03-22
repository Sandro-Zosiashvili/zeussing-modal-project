import { create } from 'zustand';

interface GlobalStore {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    allChecked: boolean;
    setAllChecked: (value: boolean) => void;
}

export const useGlobalStore = create<GlobalStore>((set) => ({
    isOpen: false,
    setIsOpen: (value) => set({ isOpen: value }),
    allChecked: true, // ✅ true - პირველი მონიშნული
    setAllChecked: (value) => set({ allChecked: value }),
}));