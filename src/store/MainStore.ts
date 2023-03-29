import { create } from "zustand";

// 메뉴 store
interface MainMenuState {
  mainMenu: string;
  soup: string;
  sideMenu: string;
  date: string;

  setMainMenu: (menu: string) => void;
  setSoup: (soup: string) => void;
  setSideMenu: (sideMenu: string) => void;
  setDate: (date: string) => void;
}

export const mainMenuStore = create<MainMenuState>((set) => ({
  mainMenu: "",
  soup: "",
  sideMenu: "",
  date: "",

  setMainMenu: (mainMenu) => set(() => ({ mainMenu })),
  setSoup: (soup) => set(() => ({ soup })),
  setSideMenu: (sideMenu) => set(() => ({ sideMenu })),
  setDate: (date) => set(() => ({ date })),
}));
