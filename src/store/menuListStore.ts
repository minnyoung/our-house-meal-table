import { DocumentData } from "firebase/firestore";
import { create } from "zustand";

type MenuListState = {
  mainMenu: DocumentData;
  soup: DocumentData;
  sideMenu: DocumentData;

  setMainMenu: (mainMenu: DocumentData) => void;
  setSoup: (soup: DocumentData) => void;
  setSideMenu: (sideMenu: DocumentData) => void;
};

export const menuListStore = create<MenuListState>((set) => ({
  mainMenu: [],
  soup: [],
  sideMenu: [],

  setMainMenu: (mainMenu) => set(() => ({ mainMenu })),
  setSoup: (soup) => set(() => ({ soup })),
  setSideMenu: (sideMenu) => set(() => ({ sideMenu })),
}));
