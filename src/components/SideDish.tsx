import styled from "styled-components";
import { mainMenuStore } from "../store/MainStore";
import { menuListStore } from "../store/menuListStore";

export default function SideDish() {
  const { sideMenu } = menuListStore();
  const { setSideMenu } = mainMenuStore();
  return (
    <MenuButtonContainer>
      {sideMenu.map((sideMenu: string, index: number) => (
        <MenuButton
          draggable="true"
          onDragStart={() => {
            setSideMenu([sideMenu]);
          }}
          // 메뉴바에서 달력으로 드래그 하지 않았을 때 초기화
          onDragEnd={() => {
            setSideMenu([]);
          }}
          key={index}
        >
          {sideMenu}
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
