import { create } from "zustand";

// 메뉴 store
interface MainMenuState {
  mainMenu: string;
  soup: string;
  date: string;

  setMainMenu: (menu: string) => void;
  setSoup: (soup: string) => void;
  setDate: (date: string) => void;
}

export const mainMenuStore = create<MainMenuState>((set) => ({
  mainMenu: "",
  soup: "",
  date: "",

  setMainMenu: (mainMenu) => set(() => ({ mainMenu })),
  setSoup: (soup) => set(() => ({ soup })),
  setDate: (date) => set(() => ({ date })),
}));
