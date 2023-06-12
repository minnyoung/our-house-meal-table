import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import useMakeEmail from "../hooks/useMakeEmail";
import useMakePassWord from "../hooks/useMakePassWord";

export default function Login() {
  const { userEmail, handleEmailInput } = useMakeEmail();
  const { userPassWord, handlePassWordInput } = useMakePassWord();
  const navigate = useNavigate();

  function handleLoginButton(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, userEmail, userPassWord)
      .then((userCredential) => {
        navigate("/mealTable");
      })
      .catch((error) => {
        alert("아이디 혹은 비밀번호가 틀렸습니다.");
      });
  }

  return (
    <S.Form>
      <S.FormInput
        type="text"
        value={userEmail}
        onChange={handleEmailInput}
        placeholder="아이디를 입력해주세요"
      />
      <S.FormInput
        type="password"
        value={userPassWord}
        onChange={handlePassWordInput}
        placeholder="비밀번호를 입력해주세요"
      />
      <button type="submit" onClick={handleLoginButton}>
        로그인
      </button>
    </S.Form>
  );
}

const S = {
  Form: styled.form`
    margin: 0px auto;
    display: flex;
    flex-direction: column;
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
