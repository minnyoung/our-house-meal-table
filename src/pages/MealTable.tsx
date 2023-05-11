import Calendar from "react-calendar";
import MenuLayout from "../components/MenuLayout";
import styled from "styled-components";

export default function MealTable() {
  return (
    <S.Container>
      <Calendar />
      <MenuLayout />
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
  `,
};
