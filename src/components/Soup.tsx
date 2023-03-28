import { mainMenuStore } from "../store/MainStore";

export default function Soup() {
  const SOUPMENULIST = ["콩나물국", "소고기미역국", "근대된장국", "황태국"];
  const { setSoup } = mainMenuStore();
  return (
    <div>
      {SOUPMENULIST.map((soupMenu, index) => (
        <span
          draggable="true"
          onDragStart={() => {
            setSoup(soupMenu);
          }}
          // 메뉴바에서 달력으로 드래그 하지 않았을 때 초기화
          onDragEnd={() => {
            setSoup("");
          }}
          key={index}
        >
          {soupMenu}
        </span>
      ))}
    </div>
  );
}
