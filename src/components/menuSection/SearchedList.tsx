import styled from "styled-components";
import { SearchResultType } from "../../types/SearchResultType";
import { userMenuStore } from "../../store/userMenuStore";

type SearchedListType = {
  searchResult: SearchResultType;
};

export default function SearchedList({ searchResult }: SearchedListType) {
  const { setUserMainMenu, setUserSoup, setUserSideMenu } = userMenuStore();

  return (
    <Container>
      {/* 최종 검색결과 객체에 결과가 없을 경우 */}
      {Object.values(searchResult).flat().length === 0 ? (
        <div>검색된 결과가 없습니다.</div>
      ) : (
        <>
          <MenuTypeText>메인메뉴</MenuTypeText>
          <MenuButtonContainer>
            {searchResult.mainMenu
              .sort()
              .map((resultMenu: string, index: number) => (
                <MenuButton
                  draggable="true"
                  onDragStart={() => {
                    setUserMainMenu(resultMenu);
                  }}
                  // 메뉴바에서 달력으로 드래그 하지 않았을 때 초기화
                  onDragEnd={() => {
                    setUserMainMenu("");
                  }}
                  key={`${resultMenu}-${index}`}
                >
                  {resultMenu}
                </MenuButton>
              ))}
          </MenuButtonContainer>
          <MenuTypeText>국/찌개</MenuTypeText>
          <MenuButtonContainer>
            {searchResult.soup
              .sort()
              .map((resultMenu: string, index: number) => (
                <MenuButton
                  draggable="true"
                  onDragStart={() => {
                    setUserSoup(resultMenu);
                  }}
                  // 메뉴바에서 달력으로 드래그 하지 않았을 때 초기화
                  onDragEnd={() => {
                    setUserSoup("");
                  }}
                  key={`${resultMenu}-${index}`}
                >
                  {resultMenu}
                </MenuButton>
              ))}
          </MenuButtonContainer>
          <MenuTypeText>반찬</MenuTypeText>
          <MenuButtonContainer>
            {searchResult.sideMenu
              .sort()
              .map((resultMenu: string, index: number) => (
                <MenuButton
                  draggable="true"
                  onDragStart={() => {
                    setUserSideMenu([resultMenu]);
                  }}
                  // 메뉴바에서 달력으로 드래그 하지 않았을 때 초기화
                  onDragEnd={() => {
                    setUserSideMenu([]);
                  }}
                  key={`${resultMenu}-${index}`}
                >
                  {resultMenu}
                </MenuButton>
              ))}
          </MenuButtonContainer>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 19.5rem;
`;
const MenuTypeText = styled.span`
  display: block;
  margin: 10px 0 5px 0;
  width: 100%;
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
`;
