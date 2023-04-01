import React, { useState } from "react";
import { format, addMonths, subMonths } from "date-fns";

import { mainMenuStore } from "../store/MainStore";

export default function useResetMenu() {
  const { menuList, setMenuList } = mainMenuStore();

  function resetMenu(currentMonth: Date) {
    let copyMenuList = [...menuList];

    copyMenuList = copyMenuList.filter(
      (menuList) => menuList.date.split("-")[1] !== format(currentMonth, "M")
    );

    setMenuList(copyMenuList);
  }

  return { resetMenu };
}
