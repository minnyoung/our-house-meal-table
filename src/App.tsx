import React from "react";
import styled from "styled-components";
import { Calendar } from "./components/Calendar";
import Menu from "./components/Menu";

function App() {
  return (
    <Container className="Container App">
      <Calendar />
      <Menu />
    </Container>
  );
}

export default App;

const Container = styled.div`
display: flex;
flex-direction: row;
`