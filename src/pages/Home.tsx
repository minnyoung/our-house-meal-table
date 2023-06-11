import { useEffect } from "react";
import styled from "styled-components";
import useUserAuthFunction from "../hooks/useUserAuthFunction";
import { loginToGoogle } from "../apis/authApis";
import Login from "../components/Login";
import { Link } from "react-router-dom";

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
          <S.ButtonContainer>
            <S.SignUpButton>
              <Link to="/signUp">회원가입</Link>
            </S.SignUpButton>
            <button onClick={loginToGoogle}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="LgbsSe-Bz112c"
              >
                <g>
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </g>
              </svg>
              <span>Google로 계속하기</span>
            </button>
          </S.ButtonContainer>
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
  ButtonContainer: styled.div`
    button {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      padding: 12px 16px;
      width: 400px;
      background-color: transparent;
      border: 1px solid black;
      border-radius: 20px;
      transition: all 0.1s ease;
      :hover {
        background-color: #e0e0e0;
        cursor: pointer;
        transition: all 0.1s ease;
      }
      > svg {
        width: 20px;
        height: 20px;
      }
      > span {
        flex: 1;
      }
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
