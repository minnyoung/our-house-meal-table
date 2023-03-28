import { mainMenuStore } from "../store/MainStore";

export default function MainDish() {
  const MAINMENULIST = ["닭갈비", "족발", "보쌈"];
  const { setMainMenu } = mainMenuStore();
  return (
    <div>
      {MAINMENULIST.map((mainMenu, index) => (
        <span
          draggable="true"
          onDragStart={() => {
            setMainMenu(mainMenu);
          }}
          // 메뉴바에서 달력으로 드래그 하지 않았을 때 초기화
          onDragEnd={() => {
            setMainMenu("");
          }}
          key={index}
        >
          {mainMenu}
        </span>
      ))}
    </div>
  );
}
