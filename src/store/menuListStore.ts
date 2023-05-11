import { create } from "zustand";

type MenuListState = {
  mainMenu: string[];
  soup: string[];
  sideMenu: string[];

  setMainMenu: (mainMenu: string[]) => void;
  setSoup: (soup: string[]) => void;
  setSideMenu: (sideMenu: string[]) => void;
};

export const mainMenuStore = create<MenuListState>((set) => ({
  mainMenu: [],
  soup: [],
  sideMenu: [],

  setMainMenu: (mainMenu) => set(() => ({ mainMenu })),
  setSoup: (soup) => set(() => ({ soup })),
  setSideMenu: (sideMenu) => set(() => ({ sideMenu })),
}));
