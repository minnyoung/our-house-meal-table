import { create } from "zustand";

export type MenuType = {
  date: string;
  userMainMenu: string;
  userSoup: string;
  userSideMenu: string[];
};

// 메뉴 store
type UserMenuState = {
  userMainMenu: string;
  userSoup: string;
  userSideMenu: string[];
  clickedDay: string;
  userMenuList: MenuType[];

  setUserMainMenu: (menu: string) => void;
  setUserSoup: (soup: string) => void;
  setUserSideMenu: (sideMenu: string[]) => void;
  setClickedDay: (clickedDay: string) => void;
  setUserMenuList: (userMenuList: MenuType[]) => void;
};

export const userMenuStore = create<UserMenuState>((set) => ({
  userMainMenu: "",
  userSoup: "",
  userSideMenu: [],
  clickedDay: "",
  userMenuList: [],

  setUserMainMenu: (userMainMenu) => set(() => ({ userMainMenu })),
  setUserSoup: (userSoup) => set(() => ({ userSoup })),
  setUserSideMenu: (userSideMenu) => {
    set(() => ({
      userSideMenu: userSideMenu.length === 0 ? [] : userSideMenu,
    }));
  },
  setClickedDay: (clickedDay) => set(() => ({ clickedDay })),
  setUserMenuList: (userMenuList) => set(() => ({ userMenuList })),
}));
