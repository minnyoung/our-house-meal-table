import create from 'zustand';

// 카테고리 store
interface MainMenuState{
    mainMenu:string,
    date: string,
    setMainMenu:(menu:string) => void,
    setDate: (date:string) => void,
  }
  
  export const mainMenuStore = create<MainMenuState>((set) => ({
    mainMenu: "",
    date: "",
    setMainMenu: (mainMenu) => set(()=> ({mainMenu})),
    setDate: (date) => set(()=> ({date}))
  }));
  