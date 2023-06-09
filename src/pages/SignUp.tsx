import { useEffect, useState } from "react";
import styled from "styled-components";
import useUserAuthFunction from "../hooks/useUserAuthFunction";
import { Link, useNavigate } from "react-router-dom";
import useMakeEmail from "../hooks/useMakeEmail";
import useMakePassWord from "../hooks/useMakePassWord";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

export default function SignUp() {
  const navigate = useNavigate();
  const { isLoggedIn, checkUserAuthentication } = useUserAuthFunction();
  //   useEffect(checkUserAuthentication, []);

  const { userEmail, isConfirmEmail, handleEmailInput } = useMakeEmail();
  const { userPassWord, isConfirmPassWord, handlePassWordInput } =
    useMakePassWord();

  function handleSignUpButton(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, userEmail, userPassWord)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("유저 : ", user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("에러코드 : ", errorCode);
        console.log("에러메세지 : ", errorMessage);
        // ..
      });
  }
  return (
    <>
      {!isLoggedIn && (
        <S.Container>
          <Link to="/">
            <h1>우리집 식단표</h1>
          </Link>
          <S.Form>
            <div>
              <span>아이디</span>
              <S.FormInput
                value={userEmail}
                onChange={handleEmailInput}
                type="text"
                placeholder="sample@email.com"
              />
            </div>
            <div>
              <span>비밀번호</span>
              <S.FormInput
                value={userPassWord}
                onChange={handlePassWordInput}
                type="password"
                placeholder="8자리 이상 입력해주세요."
              />
            </div>
            <button
              onClick={(event) => handleSignUpButton(event)}
              disabled={!(isConfirmEmail && isConfirmPassWord)}
            >
              회원가입
            </button>
          </S.Form>
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
      margin: 50px 0;
    }
    button {
      border-radius: 5px;
      padding: 4px 8px;
      :disabled {
        background-color: #b8b8b8;
        cursor: not-allowed;
        transition: 0.1s ease-in-out;
      }
      transition: 0.1s ease-in-out;
    }
  `,
  Form: styled.form`
    margin: 0px auto;
    height: 500px;
  `,
  FormInputSpan: styled.span``,
  FormInput: styled.input`
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    height: 30px;
    padding: 4px 8px;
  `,
};
