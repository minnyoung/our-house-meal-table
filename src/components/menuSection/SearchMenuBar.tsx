import { useEffect, useState } from "react";
import { DocumentData } from "@firebase/firestore";
import { menuListStore } from "../../store/menuListStore";
import { SearchResultType } from "../../types/SearchResultType";

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

  useEffect(() => {
    if (searchWords !== "") {
      setSearchResult({
        mainMenu: mainMenu.filter((menu: string) => menu.includes(searchWords)),
        soup: soup.filter((menu: string) => menu.includes(searchWords)),
        sideMenu: sideMenu.filter((menu: string) => menu.includes(searchWords)),
      });
      setMenuState("SEARCH");
    } else setMenuState("null");
  }, [searchWords, wholeMenuList]);

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
