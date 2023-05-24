import styled from "styled-components";
import { userMenuStore } from "../store/userMenuStore";

type UserMenuTextProps = {
  date: {
    day: null | string;
    year?: undefined | string;
    month?: undefined | string;
  };
  menuType: string;
};

export default function UserMenuText({ date, menuType }: UserMenuTextProps) {
  const { userMenuList } = userMenuStore();
  const dayMenuList = Object(
    userMenuList.find(
      (menu) => `${date.year}-${date.month}-${date.day}` === menu.date
    )
  );

  return (
    <>
      {typeof dayMenuList[menuType] === "object" ? (
        dayMenuList[menuType].map((data: string) => (
          <S.MenuText>{data}</S.MenuText>
        ))
      ) : (
        <S.MenuText>{dayMenuList[menuType]}</S.MenuText>
      )}
    </>
  );
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
