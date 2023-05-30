import styled from "styled-components";
import { SearchResultType } from "../../types/SearchResultType";
import { userMenuStore } from "../../store/userMenuStore";

type SearchedItemPropType = {
  resultMenuTitle: "메인메뉴" | "국/찌개" | "반찬";
  searchResult: SearchResultType;
  menuType: "mainMenu" | "soup" | "sideMenu";
};
export default function SearchedItem({
  resultMenuTitle,
  searchResult,
  menuType,
}: SearchedItemPropType) {
  const { setUserMainMenu, setUserSoup, setUserSideMenu } = userMenuStore();

  return (
    <>
      <MenuTypeText>{resultMenuTitle}</MenuTypeText>
      <MenuButtonContainer>
        {searchResult[menuType]
          .sort()
          .map((resultMenuItem: string, index: number) => (
            <MenuButton
              draggable="true"
              onDragStart={() => {
                if (menuType === "sideMenu") setUserSideMenu([resultMenuItem]);
                else if (menuType === "mainMenu")
                  setUserMainMenu(resultMenuItem);
                else setUserSoup(resultMenuItem);
              }}
              // 메뉴바에서 달력으로 드래그 하지 않았을 때 초기화
              onDragEnd={() => {
                if (menuType === "sideMenu") setUserSideMenu([]);
                else if (menuType === "mainMenu") setUserMainMenu("");
                else setUserSoup("");
              }}
              key={`${resultMenuItem}-${index}`}
            >
              {resultMenuItem}
            </MenuButton>
          ))}
      </MenuButtonContainer>
    </>
  );
}

const MenuTypeText = styled.span`
  width: 100%;
  display: block;
  margin: 10px 0 5px 0;
  font-size: 15px;
`;
const MenuButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 102px 102px 102px;
  justify-content: center;
`;
const MenuButton = styled.span`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  margin-right: 1px;
  margin-bottom: 5px;
  width: 100px;
  height: 40px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #242424;
  :hover {
    cursor: pointer;
  }
`;
