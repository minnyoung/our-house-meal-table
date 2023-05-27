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
        <S.MenuCloseButton
          type="button"
          contents="close"
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
                    <S.MenuDeleteButton
                      onClick={() => deleteUserMenu("userMainMenu")}
                      contents="delete"
                    >
                      삭제
                    </S.MenuDeleteButton>
                  </td>
                )}
              </tr>
              <tr>
                <td>국</td>
                <td>{dayMenuList.userSoup}</td>
                {dayMenuList.userSoup && (
                  <td>
                    <S.MenuDeleteButton
                      onClick={() => deleteUserMenu("userSoup")}
                      contents="delete"
                    >
                      삭제
                    </S.MenuDeleteButton>
                  </td>
                )}
              </tr>
              <tr>
                <td>반찬</td>
                <td>{dayMenuList.userSideMenu.join(", ")}</td>
                {dayMenuList.userSideMenu.length > 0 && (
                  <td>
                    <S.MenuDeleteButton
                      onClick={() => deleteUserMenu("userSideMenu")}
                      contents="delete"
                    >
                      삭제
                    </S.MenuDeleteButton>
                  </td>
                )}
              </tr>
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
    width: inherit;
    height: inherit;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #00000043;
  `,
  Modal: styled.div`
    margin: auto 0;
    padding: 30px 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    height: 200px;
    border-radius: 10px;
    background-color: #fcfcfc;
  `,
  ModalTitle: styled.span`
    margin-bottom: 10px;
    text-align: center;
    font-weight: 600;
  `,
  MenuCloseButton: styled.button<{ contents: string }>`
    position: absolute;
    top: 210px;
    right: 225px;
    padding: 8px 15px;
    font-size: 13px;
    text-align: right;
    border-radius: 15px;
    transition: 0.1s ease-in-out;
    :hover {
      transition: 0.1s ease-in-out;
      color: #dedede;
    }
  `,
  MenuTable: styled.table`
    width: 400px;
    td {
      height: 35px;
      :first-child {
        width: 70px;
        text-align: center;
        font-size: 14px;
        color: #2a2a2a;
      }
      :nth-child(2) {
        width: 260px;
      }
    }
  `,
  MenuDeleteButton: styled.button<{ contents: string }>`
    padding: 8px 15px;
    font-size: 13px;
    text-align: right;
    border-radius: 15px;
    transition: 0.1s ease-in-out;
    :hover {
      transition: 0.1s ease-in-out;
      color: #dedede;
    }
  `,
};
