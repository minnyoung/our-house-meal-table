import styled from "styled-components";
import { setDisplayManual } from "../utils/manualFunction";

type MenualPropType = {
  setIsDisplayMenualState: React.Dispatch<React.SetStateAction<string | null>>;
};
export default function Menual({ setIsDisplayMenualState }: MenualPropType) {
  return (
    <S.Container>
      <div>메뉴얼</div>
      <input
        type="checkbox"
        id="stopDisplayCheckbox"
        onClick={() => setDisplayManual("false")}
      />
      <label htmlFor="stopDisplayCheckbox">이제 그만 볼게요</label>
      <button onClick={() => setIsDisplayMenualState("false")}>닫기</button>
    </S.Container>
  );
}

const S = {
  Container: styled.div``,
};
