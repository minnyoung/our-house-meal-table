import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainMenu from "./MainMenu";
import SideMenu from "./SideMenu";
import Soup from "./Soup";
import SearchMenuBar from "./SearchMenuBar";
import SearchedList from "./SearchedList";
import { getMenuList } from "../../apis/menuListApis";
import { menuListStore } from "../../store/menuListStore";
import { DocumentData } from "@firebase/firestore";
import { SearchResultType } from "../../types/SearchResultType";

export default function MenuLayout() {
  const [menuState, setMenuState] = useState("");
  const [wholeMenuList, setWholeMenuList] = useState<
    DocumentData | undefined
  >();
  const [searchResult, setSearchResult] = useState<SearchResultType>({
    mainMenu: [],
    soup: [],
    sideMenu: [],
  });
  const { setMainMenu, setSoup, setSideMenu } = menuListStore();
  async function setMenuList() {
    const menuList = await getMenuList();
    setMainMenu(menuList?.mainMenu);
    setSideMenu(menuList?.sideMenu);
    setSoup(menuList?.soup);
    setWholeMenuList(menuList);
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
      <SearchMenuBar
        wholeMenuList={wholeMenuList}
        setMenuState={setMenuState}
        setSearchResult={setSearchResult}
      />
      <S.MenuContainer>
        {menuState === "MAIN" ? (
          <MainMenu />
        ) : menuState === "SOUP" ? (
          <Soup />
        ) : menuState === "SIDE" ? (
          <SideMenu />
        ) : menuState === "SEARCH" ? (
          <SearchedList searchResult={searchResult} />
        ) : null}
      </S.MenuContainer>
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
  MenuContainer: styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 5px;
    height: 850px;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 7px;
    }
    ::-webkit-scrollbar-thumb {
      height: 20%;
      background: #e6e6e6;
      border-radius: 10px;
    }
  `,
};
