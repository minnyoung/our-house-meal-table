import { create } from "zustand";

// 메뉴 store
interface MainMenuState {
  mainMenu: string;
  soup: string;
  sideMenu: string;
  day: string;

  setMainMenu: (menu: string) => void;
  setSoup: (soup: string) => void;
  setSideMenu: (sideMenu: string) => void;
  setDay: (day: string) => void;
}

export const mainMenuStore = create<MainMenuState>((set) => ({
  mainMenu: "",
  soup: "",
  sideMenu: "",
  day: "",

  setMainMenu: (mainMenu) => set(() => ({ mainMenu })),
  setSoup: (soup) => set(() => ({ soup })),
  setSideMenu: (sideMenu) => set(() => ({ sideMenu })),
  setDay: (day) => set(() => ({ day })),
}));
