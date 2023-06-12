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
          <S.MenuText
            onClick={(event) => event.stopPropagation()}
            rel="noreferrer"
            target="_blank"
            href={`https://www.10000recipe.com/recipe/list.html?q=${data}`}
          >
            {data}
          </S.MenuText>
        ))
      ) : (
        <S.MenuText
          onClick={(event) => event.stopPropagation()}
          rel="noreferrer"
          target="_blank"
          href={`https://www.10000recipe.com/recipe/list.html?q=${dayMenuList[menuType]}`}
        >
          {dayMenuList[menuType]}
        </S.MenuText>
      )}
    </>
  );
}

const S = {
  MenuText: styled.a`
    width: fit-content;
    padding: 1px 5px;
    border-radius: 7px;
    font-size: 0.9em;
    text-align: center;
    transition: 0.1s ease-in-out;
    :hover {
      background-color: #ebebeb;
      transition: 0.1s ease-in-out;
    }
  `,
};
