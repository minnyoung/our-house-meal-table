import styled from "styled-components";
import { setDisplayManual } from "../utils/manualFunction";
import { useState } from "react";
import menuModal from "../assets/menuModal.gif";
import menuRecipe from "../assets/menuRecipe.gif";
import menuRegist from "../assets/menuRegist.gif";
import menuRemove from "../assets/menuRemove.gif";
import menuSave from "../assets/menuSave.gif";
import menuSearch from "../assets/menuSearch.gif";

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
          <S.SlideLI>
            <span>메뉴 등록</span>
            <img src={menuRegist} alt="메뉴등록" />
            <p>
              오른쪽에 있는 메뉴를 원하는 날짜의 칸으로 드래그하면 메뉴가
              등록됩니다.
              <p>(메인메뉴, 국/찌개는 1개씩, 반찬은 3개까지 등록가능합니다.)</p>
            </p>
          </S.SlideLI>
          <S.SlideLI>
            <span>메뉴 저장</span>
            <img src={menuSave} alt="메뉴저장" />
            <p>메뉴를 등록하고 삭제한 후에는 메뉴저장 버튼을 꼭 눌러주세요.</p>
          </S.SlideLI>
          <S.SlideLI>
            <span>메뉴 삭제</span>
            <img src={menuModal} alt="메뉴삭제" />
            <p>
              달력 칸을 클릭하면 등록한 메뉴들의 상세정보를 볼 수 있고 <br />
              메뉴의 전체 삭제와 개별 삭제가 가능합니다.
              <p>(메뉴 삭제 후 반드시 메뉴 저장버튼을 눌러주세요!)</p>
            </p>
          </S.SlideLI>
          <S.SlideLI>
            <span>메뉴 삭제</span>
            <img src={menuRemove} alt="메뉴삭제" />
            <p>
              달력 상단의 메뉴 초기화 버튼을 통해 해당 달의 메뉴를 전부 초기화
              할 수 있습니다.
              <p>(메뉴 초기화 후 반드시 메뉴 저장버튼을 눌러주세요!)</p>
            </p>
          </S.SlideLI>
          <S.SlideLI>
            <span>메뉴 검색</span>
            <img src={menuSearch} alt="메뉴검색" />
            <p>
              원하는 메뉴 검색이 가능합니다. <br />
              검색된 메뉴를 달력에 등록해보세요!
            </p>
          </S.SlideLI>
          <S.SlideLI>
            <span>메뉴 레시피 검색페이지</span>
            <img src={menuRecipe} alt="메뉴레시피보기" />
            <p>
              등록한 메뉴를 클릭하면 레시피를 검색할 수 있는 페이지로
              이동합니다.
            </p>
          </S.SlideLI>
        </S.SlideUl>
        <S.ArrowButton
          direction="left"
          onClick={() => {
            if (pageNumber > 0 && pageNumber <= 2500)
              setPageNumber((previousValue) => previousValue - 500);
          }}
        >
          {"<"}
        </S.ArrowButton>
        <S.ArrowButton
          direction="right"
          onClick={() => {
            if (pageNumber >= 0 && pageNumber < 2500)
              setPageNumber((previousValue) => previousValue + 500);
          }}
        >
          {">"}
        </S.ArrowButton>
      </S.SlideContainer>
      <S.Hr />
      <S.CloseContainer>
        <div>
          <input
            type="checkbox"
            id="stopDisplayCheckbox"
            checked={isChecked}
            onClick={() => setIsChecked((previousValue) => !previousValue)}
          />
          <label htmlFor="stopDisplayCheckbox">이제 그만 볼게요</label>
        </div>
        <S.CloseButton
          onClick={() => {
            if (isChecked) setDisplayManual("false");
            setIsDisplayMenualState("false");
          }}
        >
          닫기
        </S.CloseButton>
      </S.CloseContainer>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    position: absolute;
    width: 580px;
    height: 580px;
    top: 200px;
    left: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    border: 1px solid gray;
    border-radius: 10px;
  `,
  SlideContainer: styled.div`
    width: 500px;
    height: 500px;
    margin: 0 auto;
    overflow: hidden;
  `,
  SlideUl: styled.ul<{ pageNumber: number }>`
    display: flex;
    transition: all 0.5s ease-in-out;
    transform: ${({ pageNumber }) => "translateX(-" + pageNumber + "px)"};
  `,
  SlideLI: styled.li`
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: none;
    span {
      margin: 10px 0;
      font-size: 25px;
      font-weight: 600;
      text-align: center;
    }
    img {
      width: 500px;
      height: 380px;
    }
    p {
      text-align: center;
      font-size: 15px;
      p {
        font-size: 12px;
        margin: 0;
      }
    }
  `,
  ArrowButton: styled.button<{ direction: "left" | "right" }>`
    position: absolute;
    top: 45%;
    ${({ direction }) => direction === "left" && "left: 10px;"};
    ${({ direction }) => direction === "right" && "right: 10px;"};
  `,
  CloseContainer: styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    div {
      display: flex;
      align-items: center;
      input {
        margin-right: 10px;
        :hover {
          cursor: pointer;
        }
      }
      label {
        font-size: 13px;
        :hover {
          cursor: pointer;
        }
      }
    }
  `,
  CloseButton: styled.button`
    transition: 0.1s ease-in-out;
    :hover {
      transition: 0.1s ease-in-out;
      text-decoration: underline;
      text-underline-offset: 5px;
    }
  `,
  Hr: styled.hr`
    width: 90%;
    border: 1px #dadada solid;
  `,
};
