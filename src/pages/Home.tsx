import { useEffect } from "react";
import styled from "styled-components";
import useUserAuthFunction from "../hooks/useUserAuthFunction";
import { loginToGoogle } from "../apis/authApis";
import Login from "../components/Login";
import { Link } from "react-router-dom";
import SnsLoginButtons from "../components/SnsLoginButtons";

export default function Home() {
  const { isLoggedIn, checkUserAuthentication } = useUserAuthFunction();

  useEffect(checkUserAuthentication, []);

  return (
    <>
      {!isLoggedIn && (
        <S.Container>
          <h1>우리집 식단표</h1>
          <div>
            <Login />
          </div>
          <S.SignUpButton>
            <Link to="/signUp">회원가입</Link>
          </S.SignUpButton>
          <SnsLoginButtons />
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
    justify-content: center;
    h1 {
      margin: 50px 0;
    }
  `,
  SignUpButton: styled.span`
    display: flex;
    justify-content: center;
    margin: 4px 0;
    font-size: 15px;
    color: #a4a4a4;
    :hover {
      color: #000000;
      text-decoration: underline;
      text-underline-position: under;
    }
  `,
};
