import styled from "styled-components";
import { mainMenuStore } from "../store/MainStore";

type UserMenuTextProps = {
  date: {
    day: null | string;
    year?: undefined | string;
    month?: undefined | string;
  };
  menuType: string;
};

export default function UserMenuText({ date, menuType }: UserMenuTextProps) {
  const { menuList } = mainMenuStore();
  const dayMenuList = Object(
    menuList.find(
      (menu) => `${date.year}-${date.month}-${date.day}` === menu.date
    )
  );

  return <S.MenuText>{dayMenuList[menuType]}</S.MenuText>;
}

const S = {
  MenuText: styled.span`
    width: 100%;
    margin-bottom: 2px;
    border-radius: 7px;
    font-size: 0.9em;
    text-align: center;
  `,
};
