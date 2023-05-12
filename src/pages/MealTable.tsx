import { useEffect } from "react";
import Calendar from "../components/Calendar";
import MenuLayout from "../components/MenuLayout";
import styled from "styled-components";
import useUserAuthFunction from "../hooks/useUserAuthFunction";
import { getUserMenuList } from "../apis/menuListApis";
import { mainMenuStore } from "../store/MainStore";
import { useNavigate } from "react-router-dom";

export default function MealTable() {
  const { checkUserAuthentication } = useUserAuthFunction();
  const { setMenuList } = mainMenuStore();
  const navigate = useNavigate();
  const uid = localStorage.getItem("uid");

  async function setMealTable() {
    if (uid) {
      const menuList = await getUserMenuList(uid);
      if (menuList?.menuList) {
        setMenuList(menuList?.menuList);
      } else {
        setMenuList([]);
      }
    } else {
      navigate("/");
    }
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
