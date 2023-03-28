import React, { useState } from "react";
import styled from "styled-components";
import MainDish from "./MainDish";
import SideDish from "./SideDish";
import Soup from "./Soup";

export default function Menu() {
  const [menuState, setMenuState] = useState("");
  return (
    <Container>
      <div>메뉴를 선택해주세요</div>
      <button onClick={() => setMenuState("MAIN")}>메인메뉴</button>
      <button onClick={() => setMenuState("SOUP")}>국거리</button>
      <button onClick={() => setMenuState("SIDE")}>반찬</button>
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
