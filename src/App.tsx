import React from "react";
import styled from "styled-components";
import { Calendar } from "./components/Calendar";
import MenuLayout from "./components/MenuLayout";

function App() {
  return (
    <Container className="Container App">
      <Calendar />
      <MenuLayout />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
