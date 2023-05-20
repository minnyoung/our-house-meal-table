import { useEffect, useState } from "react";
import Calendar from "../components/Calendar";
import MenuLayout from "../components/MenuLayout";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import useUserAuthFunction from "../hooks/useUserAuthFunction";
import { getUserMenuList } from "../apis/menuListApis";
import { mainMenuStore } from "../store/MainStore";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

export default function MealTable() {
  const { checkUserAuthentication } = useUserAuthFunction();
  const { setMenuList } = mainMenuStore();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
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
    (async () => {
      setIsLoading(true);
      checkUserAuthentication();
      await setMealTable();
      setIsLoading(false);
    })();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <Navbar />
      <S.MealTableWapper>
        <Calendar />
        <MenuLayout />
      </S.MealTableWapper>
    </div>
  );
}

const S = {
  MealTableWapper: styled.div`
    display: flex;
    flex-direction: row;
  `,
};
