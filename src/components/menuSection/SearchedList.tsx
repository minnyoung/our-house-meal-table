import styled from "styled-components";
import { SearchResultType } from "../../types/SearchResultType";
import SearchedItem from "./SearchedItem";

type SearchedListType = {
  searchResult: SearchResultType;
};

export default function SearchedList({ searchResult }: SearchedListType) {
  return (
    <Container>
      {/* 최종 검색결과 객체에 결과가 없을 경우 */}
      {Object.values(searchResult).flat().length === 0 ? (
        <div>검색된 결과가 없습니다.</div>
      ) : (
        <>
          <SearchedItem
            resultMenuTitle="메인메뉴"
            searchResult={searchResult}
            menuType="mainMenu"
          />
          <SearchedItem
            resultMenuTitle="국/찌개"
            searchResult={searchResult}
            menuType="soup"
          />
          <SearchedItem
            resultMenuTitle="반찬"
            searchResult={searchResult}
            menuType="sideMenu"
          />
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 19.5rem;
`;
