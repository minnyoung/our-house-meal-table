import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { removeUid } from "../utils/uid";
import styled from "styled-components";

export default function Navbar() {
  function logOut() {
    signOut(auth)
      .then(() => {
        removeUid();
      })
      .catch((error) => {
        console.log("로그아웃 중 에러가 발생했습니다.", error);
      });
  }

  return (
    <S.Container>
      <span>우리집 식단표</span>
      <button type="button" onClick={logOut}>
        로그아웃
      </button>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    span {
      margin-left: 15px;
    }
    button {
      margin-right: 15px;
      padding: 6px 8px;
      border: 0;
      border-radius: 5px;
      color: gray;
      background-color: transparent;
      transition: 0.1s ease-in-out;
      :hover {
        color: #1f1f1f;
        background-color: #dbdbdb;
        transition: 0.1s ease-in-out;
        cursor: pointer;
      }
    }
  `,
};
