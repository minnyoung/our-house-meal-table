import styled from "styled-components";
import { setDisplayManual } from "../utils/manualFunction";

export default function Menual() {
  return (
    <S.Container>
      <div>메뉴얼</div>
      <input
        type="checkbox"
        id="stopDisplayCheckbox"
        onClick={() => setDisplayManual("false")}
      />
      <label htmlFor="stopDisplayCheckbox">이제 그만 볼게요</label>
    </S.Container>
  );
}

const S = {
  Container: styled.div``,
};
