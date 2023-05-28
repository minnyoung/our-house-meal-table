import styled from "styled-components";
import { userMenuStore } from "../store/userMenuStore";
import ModalMenuDeleteButton from "./element/ModalMenuDeleteButton";

type MenuModalType = {
  date: string;
  setIsOpenMenuModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function MenuModal({ date, setIsOpenMenuModal }: MenuModalType) {
  const { userMenuList, setUserMenuList } = userMenuStore();
  const [year, month, day] = date.split("-");
  const dayMenuList = userMenuList.find((menu) => menu.date === date);

  function deleteUserMenu(
    menuType: "userMainMenu" | "userSoup" | "userSideMenu",
    sideMenu?: string
  ) {
    let copyMenuList = [...userMenuList];
    copyMenuList.map((dateMenuList) => {
      if (dateMenuList.date === date) {
        menuType === "userSideMenu"
          ? (dateMenuList[menuType] = dateMenuList[menuType].filter(
              (menu) => menu !== sideMenu
            ))
          : (dateMenuList[menuType] = "");
      }
    });
    setUserMenuList(copyMenuList);
  }

  return (
    <S.ModalContainer>
      <S.Modal>
        <S.MenuCloseButton
          type="button"
          onClick={() => setIsOpenMenuModal(false)}
        >
          닫기
        </S.MenuCloseButton>
        <S.ModalTitle>
          {year}년 {month}월 {day}일 식단표
        </S.ModalTitle>
        {dayMenuList ? (
          <>
            <S.MenuTable>
              <tr>
                <td>메인메뉴</td>
                <td>{dayMenuList.userMainMenu}</td>
                {dayMenuList.userMainMenu && (
                  <td>
                    <ModalMenuDeleteButton
                      deleteUserMenu={() => deleteUserMenu("userMainMenu")}
                    />
                  </td>
                )}
              </tr>
              <tr>
                <td>국</td>
                <td>{dayMenuList.userSoup}</td>
                {dayMenuList.userSoup && (
                  <td>
                    <ModalMenuDeleteButton
                      deleteUserMenu={() => deleteUserMenu("userSoup")}
                    />
                  </td>
                )}
              </tr>
              {dayMenuList.userSideMenu.length === 0 && (
                <tr>
                  <td>반찬</td>
                </tr>
              )}
              {dayMenuList.userSideMenu.map((sideMenu, index) =>
                index === 0 ? (
                  <tr>
                    <td>반찬</td>
                    <td>{sideMenu}</td>
                    {dayMenuList.userSideMenu.length > 0 && (
                      <td>
                        <ModalMenuDeleteButton
                          deleteUserMenu={() =>
                            deleteUserMenu("userSideMenu", sideMenu)
                          }
                        />
                      </td>
                    )}
                  </tr>
                ) : (
                  <tr>
                    <td></td>
                    <td>{sideMenu}</td>
                    {dayMenuList.userSideMenu.length > 0 && (
                      <td>
                        <ModalMenuDeleteButton
                          deleteUserMenu={() =>
                            deleteUserMenu("userSideMenu", sideMenu)
                          }
                        />
                      </td>
                    )}
                  </tr>
                )
              )}
            </S.MenuTable>
          </>
        ) : (
          <div>등록된 메뉴가 없습니다</div>
        )}
      </S.Modal>
    </S.ModalContainer>
  );
}

const S = {
  ModalContainer: styled.div`
    position: absolute;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Modal: styled.div`
    padding: 30px 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    height: 200px;
    border-radius: 10px;
    background-color: #fcfcfc;
    box-shadow: 0 0 15px 1px #cecece71;
  `,
  ModalTitle: styled.span`
    margin-bottom: 10px;
    text-align: center;
    font-weight: 600;
  `,
  MenuCloseButton: styled.button`
    position: absolute;
    top: 210px;
    right: 225px;
    padding: 8px 15px;
    font-size: 13px;
    text-align: right;
    border-radius: 15px;
    transition: 0.1s ease-in-out;
    color: #aaaaaa;
    :hover {
      transition: 0.1s ease-in-out;
      color: black;
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  `,
  MenuTable: styled.table`
    width: 400px;
    td {
      height: 30px;
      :first-child {
        width: 70px;
        text-align: center;
        font-size: 14px;
        color: #2a2a2a;
      }
      :nth-child(2) {
        width: 260px;
      }
      :nth-child(3) {
        text-align: center;
      }
    }
  `,
};
