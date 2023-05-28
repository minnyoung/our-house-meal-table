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
    <div>
      <input
        type="text"
        placeholder="메뉴를 입력해주세요."
        value={searchWords}
        onChange={(event) => setSearchWords(event.currentTarget.value)}
      />
    </div>
  );
}
