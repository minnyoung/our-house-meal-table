import { userMenuStore } from "../store/userMenuStore";

export function useMakeMenuListFunction(date: string) {
  const {
    userMainMenu,
    userSoup,
    userSideMenu,
    userMenuList,
    setUserMainMenu,
    setUserSoup,
    setUserSideMenu,
    setUserMenuList,
  } = userMenuStore();

  // 메뉴 존재하지 않는 경우
  function makeMenuList() {
    if (
      !userMenuList.find((menuListElement) => menuListElement.date === date)
    ) {
      !date.includes("undefined") &&
        setUserMenuList([
          ...userMenuList,
          {
            date: date,
            userMainMenu: userMainMenu,
            userSoup: userSoup,
            userSideMenu: userSideMenu,
          },
        ]);

      // 메뉴가 존재하는 경우
    } else {
      let copyMenuList = [...userMenuList];

      copyMenuList.map((menu) => {
        if (menu === copyMenuList.find((menu) => menu.date === date)) {
          userMainMenu !== "" && (menu.userMainMenu = userMainMenu);
          userSoup !== "" && (menu.userSoup = userSoup);
          userSideMenu.length !== 0 &&
            menu.userSideMenu.length < 3 &&
            !menu.userSideMenu.includes(userSideMenu[0]) &&
            (menu.userSideMenu = [...menu.userSideMenu, ...userSideMenu]);
        }
      });

      setUserMenuList(copyMenuList);
    }

    // state 초기화
    setUserMainMenu("");
    setUserSoup("");
    setUserSideMenu([]);
  }
  return { makeMenuList };
}
