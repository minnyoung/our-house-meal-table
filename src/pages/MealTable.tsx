import { useEffect } from "react";
import Calendar from "../components/Calendar";
import MenuLayout from "../components/MenuLayout";
import styled from "styled-components";
import useUserAuthFunction from "../hooks/useUserAuthFunction";
import { getUserMenuList } from "../apis/menuListApis";
import { mainMenuStore, userIdStore } from "../store/MainStore";

export default function MealTable() {
  const { checkUserAuthentication } = useUserAuthFunction();
  const { userId } = userIdStore();
  const { setMenuList } = mainMenuStore();

  async function setMealTable() {
    const menuList = await getUserMenuList(userId);
    setMenuList(menuList?.menuList);
  }

  useEffect(() => {
    checkUserAuthentication();
    setMealTable();
  }, []);

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
