import React from "react";
import { format } from "date-fns";

import { userMenuStore } from "../store/userMenuStore";

export default function useResetMenu() {
  const { userMenuList, setUserMenuList } = userMenuStore();

  function resetMenu(currentMonth: Date) {
    let copyMenuList = [...userMenuList];

    copyMenuList = copyMenuList.filter(
      (menuList) => menuList.date.split("-")[1] !== format(currentMonth, "M")
    );

    setUserMenuList(copyMenuList);
  }

  return { resetMenu };
}
