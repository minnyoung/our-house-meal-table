import { create } from "zustand";

export type MenuType = {
  date: string;
  mainMenu: string;
  soup: string;
  sideMenu: string[];
};

// 메뉴 store
type MainMenuState = {
  mainMenu: string;
  soup: string;
  sideMenu: string[];
  day: string;
  menuList: MenuType[];

  setMainMenu: (menu: string) => void;
  setSoup: (soup: string) => void;
  setSideMenu: (sideMenu: string[]) => void;
  setDay: (day: string) => void;
  setMenuList: (menuObject: MenuType[]) => void;
};

export const mainMenuStore = create<MainMenuState>((set) => ({
  mainMenu: "",
  soup: "",
  sideMenu: [],
  day: "",
  menuList: [],

  setMainMenu: (mainMenu) => set(() => ({ mainMenu })),
  setSoup: (soup) => set(() => ({ soup })),
  setSideMenu: (sideMenu) => {
    set(() => ({
      sideMenu: sideMenu.length === 0 ? [] : sideMenu,
    }));
  },
  setDay: (day) => set(() => ({ day })),
  setMenuList: (menuObject) => set(() => ({ menuList: menuObject })),
}));
