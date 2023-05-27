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
                    >
                      <svg
                        className="feather feather-trash-2"
                        fill="none"
                        height="18"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <line x1="10" x2="10" y1="11" y2="17" />
                        <line x1="14" x2="14" y1="11" y2="17" />
                      </svg>
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
                    >
                      <svg
                        className="feather feather-trash-2"
                        fill="none"
                        height="18"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <line x1="10" x2="10" y1="11" y2="17" />
                        <line x1="14" x2="14" y1="11" y2="17" />
                      </svg>
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
                    >
                      <svg
                        className="feather feather-trash-2"
                        fill="none"
                        height="18"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <line x1="10" x2="10" y1="11" y2="17" />
                        <line x1="14" x2="14" y1="11" y2="17" />
                      </svg>
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
      :nth-child(3) {
        text-align: center;
      }
    }
  `,
  MenuDeleteButton: styled.button`
    font-size: 13px;
    text-align: right;
    border-radius: 15px;
    color: #aaaaaa;
    transition: 0.1s ease-in-out;
    :hover {
      transition: 0.1s ease-in-out;
      color: black;
    }
  `,
};
