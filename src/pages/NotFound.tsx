import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NotFound() {
  return (
    <S.Container>
      <S.TitleSpan>잘못된 페이지입니다.</S.TitleSpan>
      <S.HomeButton>
        <Link to="/">홈으로 가기</Link>
      </S.HomeButton>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  TitleSpan: styled.span`
    margin-bottom: 10px;
    font-size: 30px;
  `,
  HomeButton: styled.button`
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 15px;
    color: gray;
    transition: 0.1s ease-in-out;
    :hover {
      background-color: #dcdcdc;
      color: black;
      transition: 0.1s ease-in-out;
    }
  `,
};
