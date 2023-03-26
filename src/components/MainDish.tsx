import { mainMenuStore } from "../store/MainStore";

export default function MainDish() {
    const MAINMENULIST = ["닭갈비", "족발", "보쌈"]
    const {setMainMenu} = mainMenuStore()
    return <div>{MAINMENULIST.map((mainMenu) => (
    <span draggable="true" 
    onDragStart={() => console.log("드래그 시작")} 
    onDragEnd={(event) => {console.log("드래그 끝"); setMainMenu(mainMenu)}}
    >{mainMenu}</span>
  ))}</div>;
}
