import styled from "styled-components";
import { setDisplayManual } from "../utils/manualFunction";
import { useState } from "react";

type MenualPropType = {
  setIsDisplayMenualState: React.Dispatch<React.SetStateAction<string | null>>;
};
export default function Menual({ setIsDisplayMenualState }: MenualPropType) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <S.Container>
      <div>메뉴얼</div>
      <input
        type="checkbox"
        id="stopDisplayCheckbox"
        checked={isChecked}
        onClick={() => setIsChecked((previousValue) => !previousValue)}
      />
      <label htmlFor="stopDisplayCheckbox">이제 그만 볼게요</label>
      <button
        onClick={() => {
          if (isChecked) setDisplayManual("false");
          setIsDisplayMenualState("false");
        }}
      >
        닫기
      </button>
    </S.Container>
  );
}

const S = {
  Container: styled.div``,
};
