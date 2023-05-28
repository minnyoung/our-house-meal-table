import styled from "styled-components";
import { useEffect, useState } from "react";
import { DocumentData } from "@firebase/firestore";
import { menuListStore } from "../../store/menuListStore";
import { SearchResultType } from "../../types/SearchResultType";
import useDebounce from "../../hooks/useDebounde";

type SearchMenuType = {
  setMenuState: React.Dispatch<React.SetStateAction<string>>;
  setSearchResult: React.Dispatch<React.SetStateAction<SearchResultType>>;
  wholeMenuList: DocumentData | undefined;
};

export default function SearchMenuBar({
  setMenuState,
  setSearchResult,
  wholeMenuList,
}: SearchMenuType) {
  const { mainMenu, soup, sideMenu } = menuListStore();
  const [searchWords, setSearchWords] = useState("");
  const debouncedSearchQuery = useDebounce(searchWords, 300);

  useEffect(() => {
    if (debouncedSearchQuery !== "") {
      setSearchResult({
        mainMenu: mainMenu.filter((menu: string) =>
          menu.includes(debouncedSearchQuery)
        ),
        soup: soup.filter((menu: string) =>
          menu.includes(debouncedSearchQuery)
        ),
        sideMenu: sideMenu.filter((menu: string) =>
          menu.includes(debouncedSearchQuery)
        ),
      });
      setMenuState("SEARCH");
    } else setMenuState("null");
  }, [debouncedSearchQuery, wholeMenuList]);

  return (
    <S.Container>
      <S.SearchIcon>
        <svg
          width="15"
          height="15"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 7.5C13 10.5376 10.5376 13 7.5 13C4.46243 13 2 10.5376 2 7.5C2 4.46243 4.46243 2 7.5 2C10.5376 2 13 4.46243 13 7.5ZM12.0491 13.4633C10.7873 14.4274 9.21054 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 9.21054 14.4274 10.7873 13.4633 12.0491L16.6569 15.2426C17.0474 15.6332 17.0474 16.2663 16.6569 16.6569C16.2663 17.0474 15.6332 17.0474 15.2426 16.6569L12.0491 13.4633Z"
            fill="black"
          />
        </svg>
      </S.SearchIcon>
      <S.SearchInput
        type="text"
        placeholder="메뉴를 입력해주세요."
        value={searchWords}
        onChange={(event) => setSearchWords(event.currentTarget.value)}
      />
      {searchWords && (
        <button onClick={() => setSearchWords("")}>
          <svg
            width="8"
            height="8"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.6569 0.343133C11.2663 -0.0473908 10.6332 -0.0473908 10.2426 0.343133L6 4.58577L1.75736 0.343133C1.36684 -0.0473911 0.73367 -0.0473911 0.343146 0.343133C-0.0473781 0.733657 -0.0473778 1.36682 0.343146 1.75735L4.58579 5.99999L0.343146 10.2426C-0.0473788 10.6332 -0.0473784 11.2663 0.343146 11.6568C0.73367 12.0474 1.36683 12.0474 1.75736 11.6568L6 7.4142L10.2426 11.6568C10.6332 12.0474 11.2663 12.0474 11.6569 11.6568C12.0474 11.2663 12.0474 10.6332 11.6569 10.2426L7.41421 5.99999L11.6569 1.75735C12.0474 1.36682 12.0474 0.733658 11.6569 0.343133Z"
              fill="black"
            />
          </svg>
        </button>
      )}
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    width: 340px;
    margin: 5px auto;
    border: 1px solid gray;
    border-radius: 50px;
    button {
      margin: 0 10px;
      width: 20px;
      height: 20px;
      border-radius: 50px;
      :hover {
        background-color: #e5e5e5;
      }
    }
  `,
  SearchIcon: styled.div`
    display: flex;
    align-items: center;
    padding: 0 15px;
  `,
  SearchInput: styled.input`
    flex: 1;
    padding: 10px 15px 10px 0;
    width: 70%;
  `,
};
