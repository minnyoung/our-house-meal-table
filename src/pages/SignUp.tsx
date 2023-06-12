import styled from "styled-components";
import useUserAuthFunction from "../hooks/useUserAuthFunction";
import { Link } from "react-router-dom";
import useMakeEmail from "../hooks/useMakeEmail";
import useMakePassWord from "../hooks/useMakePassWord";
import { fetchToSignUp } from "../apis/authApis";

export default function SignUp() {
  const { isLoggedIn } = useUserAuthFunction();
  const { userEmail, isConfirmEmail, handleEmailInput } = useMakeEmail();
  const { userPassWord, isConfirmPassWord, handlePassWordInput } =
    useMakePassWord();

  function handleSignUpButton(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    fetchToSignUp(userEmail, userPassWord);
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
              <S.FormInputTitle>아이디</S.FormInputTitle>
              <S.FormInput
                value={userEmail}
                onChange={handleEmailInput}
                type="text"
                placeholder="sample@email.com"
              />
            </div>
            <div>
              <S.FormInputTitle>비밀번호</S.FormInputTitle>
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
    justify-content: center;
    h1 {
      margin: 50px 0;
    }
    button {
      width: 100%;
      border-radius: 5px;
      margin-top: 20px;
      padding: 10px;
      background-color: #8dcaff;
      :hover {
        background-color: #5cb3ff;
      }
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
  FormInputTitle: styled.div`
    margin-top: 10px;
    font-size: 17px;
    font-weight: 500;
  `,
  FormInput: styled.input`
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    width: 250px;
    height: 40px;
    margin: 5px 0;
    padding: 8px 10px;
    transition: 0.1s ease-in-out;
    box-sizing: border-box;
    :focus {
      transition: 0.1s ease-in-out;
      border: 2px solid #5cb3ff;
    }
  `,
};
