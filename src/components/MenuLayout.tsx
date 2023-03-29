import React, { useState } from "react";
import styled from "styled-components";
import MainDish from "./MainDish";
import SideDish from "./SideDish";
import Soup from "./Soup";

export default function Menu() {
  const [menuState, setMenuState] = useState("");
  return (
    <Container>
      <ButtonContainer>
        <MenuButton
          onClick={() => setMenuState("MAIN")}
          menuType="MAIN"
          menuState={menuState}
          color="#65c2c7"
        >
          메인메뉴
        </MenuButton>
        <MenuButton
          onClick={() => setMenuState("SOUP")}
          menuType="SOUP"
          menuState={menuState}
          color="#ef9fbc"
        >
          국거리
        </MenuButton>
        <MenuButton
          onClick={() => setMenuState("SIDE")}
          menuType="SIDE"
          menuState={menuState}
          color="#edae3a"
        >
          반찬
        </MenuButton>
      </ButtonContainer>
      <div>
        {menuState === "MAIN" ? (
          <MainDish />
        ) : menuState === "SOUP" ? (
          <Soup />
        ) : menuState === "SIDE" ? (
          <SideDish />
        ) : null}
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 20rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const MenuButton = styled.button<{ menuType: string; menuState: string }>`
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
`;
