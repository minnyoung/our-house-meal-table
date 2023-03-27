import { mainMenuStore } from "../store/MainStore";

export default function MainDish() {
  const MAINMENULIST = ["닭갈비", "족발", "보쌈"];
  const { setMainMenu } = mainMenuStore();
  return (
    <div>
      {MAINMENULIST.map((mainMenu, index) => (
        <span
          draggable="true"
          onDragStart={() => setMainMenu(mainMenu)}
          key={index}
        >
          {mainMenu}
        </span>
      ))}
    </div>
  );
}
