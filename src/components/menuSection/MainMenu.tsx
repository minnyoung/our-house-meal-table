import styled from "styled-components";
import { userMenuStore } from "../../store/userMenuStore";
import { menuListStore } from "../../store/menuListStore";

export default function MainMenu() {
  const { mainMenu } = menuListStore();
  const { setUserMainMenu } = userMenuStore();
  return (
    <MenuButtonContainer>
      {mainMenu.sort().map((mainMenu: string, index: number) => (
        <MenuButton
          draggable="true"
          onDragStart={() => {
            setUserMainMenu(mainMenu);
          }}
          // 메뉴바에서 달력으로 드래그 하지 않았을 때 초기화
          onDragEnd={() => {
            setUserMainMenu("");
          }}
          key={index}
        >
          {mainMenu}
        </MenuButton>
      ))}
    </MenuButtonContainer>
  );
}

const MenuButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 102px 102px 102px;
  justify-content: center;

  margin: 0 auto;
  width: 19.5rem;
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
