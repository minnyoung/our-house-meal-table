import styled from "styled-components";
import { MenuType, userMenuStore } from "../store/userMenuStore";
import ModalMenuDeleteButton from "./element/ModalMenuDeleteButton";
import { useMakeMenuListFunction } from "../hooks/useMakeMenuListFunction";

type MenuModalType = {
  date: string;
  setIsOpenMenuModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function MenuModal({ date, setIsOpenMenuModal }: MenuModalType) {
  const { userMenuList, setUserMenuList, clickedDay, setClickedDay } =
    userMenuStore();
  const { makeMenuList } = useMakeMenuListFunction(date);
  const [year, month, day] = date.split("-");
  const dayMenuList = userMenuList.find((menu) => menu.date === date);

  /**모달 내에서 메뉴를 모두 삭제했을 때,
   * 메뉴가 없는 날짜라면 전체 메뉴 리스트에서 삭제시켜주는 함수 */
  function confirmToEmptyMenu(
    wholeMenuList: MenuType[],
    menuListItem: MenuType | undefined
  ) {
    if (
      menuListItem &&
      menuListItem.userMainMenu === "" &&
      menuListItem.userSoup === "" &&
      menuListItem.userSideMenu.length === 0
    ) {
      return wholeMenuList.filter(
        (dateOfMenuList) => dateOfMenuList.date !== menuListItem.date
      );
    }
  }

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
    const confirmedMenuList = confirmToEmptyMenu(copyMenuList, dayMenuList);
    confirmedMenuList
      ? setUserMenuList(confirmedMenuList)
      : setUserMenuList(copyMenuList);
  }

  function deleteAllMenu(date: string) {
    const deleteAllMenuAnswer = window.confirm(
      "해당일 메뉴가 삭제됩니다. \n삭제하시겠습니까?"
    );
    if (deleteAllMenuAnswer) {
      let copyMenuList = [...userMenuList];
      const filteredMenuList = copyMenuList.filter(
        (dateMenuList) => dateMenuList.date !== date
      );
      setUserMenuList(filteredMenuList);
    }
  }

  return (
    <S.ModalContainer
      onDrop={makeMenuList}
      onDragOver={(event) => event.preventDefault()}
    >
      <S.Modal>
        <S.ModalTitle>
          <span>
            {year}년 {month}월 {day}일 식단표
          </span>
          <S.DeleteAllMenuButton
            type="button"
            onClick={() => deleteAllMenu(date)}
          >
            전체삭제
          </S.DeleteAllMenuButton>
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
          <S.NonAddedMenuText>등록된 메뉴가 없습니다</S.NonAddedMenuText>
        )}
        <S.MenuCloseButton
          type="button"
          onClick={() => {
            setIsOpenMenuModal(false);
            setClickedDay("");
          }}
        >
          닫기
        </S.MenuCloseButton>
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
    width: 400px;
    height: 230px;
    padding: 30px 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10px;
    background-color: #fcfcfc;
    box-shadow: 0 0 15px 1px #cecece71;
  `,
  ModalTitle: styled.span`
    display: flex;
    margin-bottom: 10px;
    text-align: center;
    font-weight: 600;
    span {
      flex: 1;
    }
  `,
  DeleteAllMenuButton: styled.button`
    font-size: 12px;
    color: #aaaaaa;
    :hover {
      transition: 0.1s ease-in-out;
      color: black;
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  `,
  DeleteIconContainer: styled.button`
    width: 20px;
    height: 20px;
    margin-right: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    svg {
      color: #cbcaca;
      transition: 0.1s ease-in-out;
    }
    :hover {
      transition: 0.1s ease-in-out;
      svg {
        color: #171717;
      }
    }
  `,
  MenuCloseButton: styled.button`
    position: absolute;
    top: 13.5rem;
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
    display: flex;
    flex-direction: column;
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
  NonAddedMenuText: styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `,
};
