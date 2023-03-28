import { mainMenuStore } from "../store/MainStore";

export default function SideDish() {
  const SIDEMENULIST = ["콩나물무침", "시금치무침", "무나물", "숙주나물무침"];
  const { setSideMenu } = mainMenuStore();
  return (
    <div>
      {SIDEMENULIST.map((sideMenu, index) => (
        <span
          draggable="true"
          onDragStart={() => {
            setSideMenu(sideMenu);
          }}
          // 메뉴바에서 달력으로 드래그 하지 않았을 때 초기화
          onDragEnd={() => {
            setSideMenu("");
          }}
          key={index}
        >
          {sideMenu}
        </span>
      ))}
    </div>
  );
}
