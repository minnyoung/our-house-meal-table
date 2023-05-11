import React, { useEffect, useState } from "react";
import { getMenuList } from "../apis/menuListApis";
import { menuListStore } from "../store/menuListStore";
import styled from "styled-components";
import MainDish from "./MainDish";
import SideDish from "./SideDish";
import Soup from "./Soup";

export default function MenuLayout() {
  const [menuState, setMenuState] = useState("");
  const { setMainMenu, setSoup, setSideMenu } = menuListStore();
  async function setMenuList() {
    const menuList = await getMenuList();
    setMainMenu(menuList?.mainDish);
    setSideMenu(menuList?.sideMenu);
    setSoup(menuList?.soup);
  }
  useEffect(() => {
    setMenuList();
  }, []);
  return (
    <S.Container>
      <S.ButtonContainer>
        <S.MenuButton
          onClick={() => setMenuState("MAIN")}
          menuType="MAIN"
          menuState={menuState}
          color="#65c2c7"
        >
          메인메뉴
        </S.MenuButton>
        <S.MenuButton
          onClick={() => setMenuState("SOUP")}
          menuType="SOUP"
          menuState={menuState}
          color="#ef9fbc"
        >
          국거리
        </S.MenuButton>
        <S.MenuButton
          onClick={() => setMenuState("SIDE")}
          menuType="SIDE"
          menuState={menuState}
          color="#edae3a"
        >
          반찬
        </S.MenuButton>
      </S.ButtonContainer>
      <div>
        {menuState === "MAIN" ? (
          <MainDish />
        ) : menuState === "SOUP" ? (
          <Soup />
        ) : menuState === "SIDE" ? (
          <SideDish />
        ) : null}
      </div>
    </S.Container>
  );
}
const S = {
  Container: styled.div`
    width: 20rem;
  `,

  ButtonContainer: styled.div`
    display: flex;
    margin-top: 20px;
  `,
  MenuButton: styled.button<{ menuType: string; menuState: string }>`
    margin: 4px;
    flex: 1 1 auto;
    height: 3em;
    background-color: ${({ menuType, menuState, color }) =>
      menuType === menuState ? color : "transparent"};
    border: none;
    border-radius: 60px;
    :hover {
      background-color: ${({ color }) => color};
      cursor: pointer;
      transition: all 0.2s ease;
    }
  `,
};
