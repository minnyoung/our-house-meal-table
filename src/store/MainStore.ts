import { create } from "zustand";

// 카테고리 store
interface MainMenuState {
  mainMenu: string;
  soup: string;
  date: string;
  menuList: [
    {
      date: string;
      menu: string;
    }
  ];
  setMainMenu: (menu: string) => void;
  setSoup: (soup: string) => void;
  setDate: (date: string) => void;
  setMenuList: (date: string, menu: string) => void;
}

export const mainMenuStore = create<MainMenuState>((set) => ({
  mainMenu: "",
  soup: "",
  date: "",
  menuList: [
    {
      date: "",
      menu: "",
    },
  ],
  setMainMenu: (mainMenu) => set(() => ({ mainMenu })),
  setSoup: (soup) => set(() => ({ soup })),
  setDate: (date) => set(() => ({ date })),
  setMenuList: (date, menu) =>
    set((state) => ({ menuList: { ...state.menuList, date } })),
}));
