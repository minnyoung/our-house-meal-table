import styled from "styled-components";
import { userMenuStore } from "../store/userMenuStore";

type MenuModalType = {
  date: string;
  setIsOpenMenuModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function MenuModal({ date, setIsOpenMenuModal }: MenuModalType) {
  const { userMenuList, setUserMenuList } = userMenuStore();
  const [year, month, day] = date.split("-");
  const dayMenuList = userMenuList.find((menu) => menu.date === date);

  function deleteUserMenu(
    menuType: "userMainMenu" | "userSoup" | "userSideMenu"
  ) {
    let copyMenuList = [...userMenuList];
    copyMenuList.map((dateMenuList) => {
      if (dateMenuList.date === date) {
        menuType === "userSideMenu"
          ? (dateMenuList[menuType] = [])
          : (dateMenuList[menuType] = "");
      }
    });
    setUserMenuList(copyMenuList);
  }

  return (
    <S.ModalContainer>
      <S.Modal>
        <button type="button" onClick={() => setIsOpenMenuModal(false)}>
          닫기
        </button>
        <S.ModalText>
          {year}년 {month}월 {day}일 식단표
        </S.ModalText>
        {dayMenuList ? (
          <>
            <div>메인메뉴 | {dayMenuList.userMainMenu}</div>
            {dayMenuList.userMainMenu && (
              <button onClick={() => deleteUserMenu("userMainMenu")}>
                삭제
              </button>
            )}
            <div>국 | {dayMenuList.userSoup}</div>
            {dayMenuList.userSoup && (
              <button onClick={() => deleteUserMenu("userSoup")}>삭제</button>
            )}
            <div>반찬 | {dayMenuList.userSideMenu.join(", ")}</div>
            {dayMenuList.userSideMenu.length > 0 && (
              <button onClick={() => deleteUserMenu("userSideMenu")}>
                삭제
              </button>
            )}
          </>
        ) : (
          <div>등록된메뉴가 없습니다</div>
        )}
      </S.Modal>
    </S.ModalContainer>
  );
}

const S = {
  ModalContainer: styled.div`
    position: absolute;
    width: fit-content;
    height: fit-content;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Modal: styled.div`
    margin: auto 0;
    padding: 3rem 6rem;
    border-radius: 10px;
    background-color: #fcfcfc;
  `,
  ModalText: styled.span`
    font-weight: 600;
  `,
  ModalButtonContainer: styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  `,
  ModalButton: styled.button<{ contents: string }>`
    padding: 8px 15px;
    font-size: 13px;
    border-radius: 15px;
    transition: 0.1s ease-in-out;
    :hover {
      transition: 0.1s ease-in-out;
      color: #ffffff;
    }
  `,
};
