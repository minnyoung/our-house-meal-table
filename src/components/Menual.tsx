import styled from "styled-components";
import { setDisplayManual } from "../utils/manualFunction";
import { useState } from "react";

type MenualPropType = {
  setIsDisplayMenualState: React.Dispatch<React.SetStateAction<string | null>>;
};
export default function Menual({ setIsDisplayMenualState }: MenualPropType) {
  const [isChecked, setIsChecked] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  return (
    <S.Container>
      <S.SlideContainer>
        <S.SlideUl pageNumber={pageNumber}>
          <li>
            <span>메뉴등록</span>
            <img src="#" alt="메뉴등록" />
            <p>
              오른쪽에 있는 메뉴를 원하는 날짜의 칸으로 드래그하면, <br />
              메뉴가 등록됩니다.
            </p>
            <p>(메인메뉴, 국/찌개는 1개씩, 반찬은 3개까지 등록가능합니다.)</p>
          </li>
          <li>
            <span>메뉴삭제</span>
            <img src="#" alt="메뉴삭제" />
            <p>
              달력 칸을 클릭하면 등록한 메뉴들의 상세정보를 볼 수 있고, <br />
              메뉴의 전체 삭제와 개별 삭제가 가능합니다.
            </p>
          </li>
          <li>
            <span>메뉴검색</span>
            <img src="#" alt="메뉴검색" />
            <p>원하는 메뉴 검색이 가능합니다.</p>
          </li>
          <li>
            <span>메뉴저장</span>
            <img src="#" alt="메뉴저장" />
            <p>메뉴를 등록하고 삭제한 후에는 메뉴저장 버튼을 꼭 눌러주세요.</p>
          </li>
        </S.SlideUl>
        <S.ArrowButton
          direction="left"
          onClick={() => {
            if (pageNumber > 0 && pageNumber <= 1500)
              setPageNumber((previousValue) => previousValue - 500);
          }}
        >
          {"<"}
        </S.ArrowButton>
        <S.ArrowButton
          direction="right"
          onClick={() => {
            if (pageNumber >= 0 && pageNumber < 1500)
              setPageNumber((previousValue) => previousValue + 500);
          }}
        >
          {">"}
        </S.ArrowButton>
      </S.SlideContainer>
      <div>
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
      </div>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    position: absolute;
    width: 600px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    border: 1px solid gray;
    border-radius: 10px;
  `,
  SlideContainer: styled.div`
    background-color: green;
    width: 500px;
    height: 500px;
    margin: 0 auto;
    overflow: hidden;
  `,
  SlideUl: styled.ul<{ pageNumber: number }>`
    display: flex;
    transition: all 0.5s ease-in-out;
    transform: ${({ pageNumber }) => "translateX(-" + pageNumber + "px)"};
    li {
      width: 500px;
      height: 500px;
      display: flex;
      flex-direction: column;
      flex: none;
    }
  `,
  ArrowButton: styled.button<{ direction: "left" | "right" }>`
    position: absolute;
    top: 45%;
    ${({ direction }) => direction === "left" && "left: 10px;"};
    ${({ direction }) => direction === "right" && "right: 10px;"};
  `,
};
