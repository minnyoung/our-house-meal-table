import { useEffect } from "react";
import styled from "styled-components";
import useUserAuthFunction from "../hooks/useUserAuthFunction";
import { Link } from "react-router-dom";

export default function SignUp() {
  const { isLoggedIn, checkUserAuthentication } = useUserAuthFunction();

  //   useEffect(checkUserAuthentication, []);

  return (
    <>
      {!isLoggedIn && (
        <S.Container>
          <Link to="/">
            <h1>우리집 식단표</h1>
          </Link>
          <form>
            <input type="text" placeholder="sample@email.com" />
            <input type="text" placeholder="8자리 이상 입력해주세요." />
            <button>회원가입</button>
          </form>
        </S.Container>
      )}
    </>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      margin: 250px 0;
    }
  `,
};
