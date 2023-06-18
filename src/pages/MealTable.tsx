import { useEffect, useState } from "react";
import Calendar from "../components/calendar/Calendar";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import useUserAuthFunction from "../hooks/useUserAuthFunction";
import { getUserMenuList } from "../apis/menuListApis";
import { userMenuStore } from "../store/userMenuStore";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { getUid } from "../utils/uid";
import MenuLayout from "../components/menuSection/MenuLayout";
import { getDisplayManual } from "../utils/manualFunction";
import Menual from "../components/Menual";

export default function MealTable() {
  const { checkUserAuthentication } = useUserAuthFunction();
  const { setUserMenuList } = userMenuStore();
  const uid = getUid();
  const isDisplayMenual = getDisplayManual();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function setMealTable() {
    if (uid) {
      const menuList = await getUserMenuList(uid);
      if (menuList?.menuList) {
        setUserMenuList(menuList?.menuList);
      } else {
        setUserMenuList([]);
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
      {isDisplayMenual === "true" && <Menual />}
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
