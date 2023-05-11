import { useEffect } from "react";
import Calendar from "../components/Calendar";
import MenuLayout from "../components/MenuLayout";
import styled from "styled-components";
import useUserAuthFunction from "../hooks/useUserAuthFunction";

export default function MealTable() {
  const { checkUserAuthentication } = useUserAuthFunction();

  useEffect(checkUserAuthentication, []);

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
