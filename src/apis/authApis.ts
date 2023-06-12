import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { removeUid } from "../utils/uid";

export async function fetchToSignUp(userEmail: string, userPassWord: string) {
  try {
    await createUserWithEmailAndPassword(auth, userEmail, userPassWord);
  } catch (error) {
    alert("존재하는 이메일입니다. 다른 이메일을 작성해주세요.");
  }
}

export async function loginToEmail(userEmail: string, userPassWord: string) {
  try {
    await signInWithEmailAndPassword(auth, userEmail, userPassWord);
  } catch (error) {
    alert("아이디 혹은 비밀번호가 틀렸습니다.");
  }
}

export async function loginToGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.log("로그인 시 에러", error);
  }
}

export function logout() {
  signOut(auth)
    .then(() => {
      removeUid();
    })
    .catch((error) => {
      console.log("로그아웃 중 에러가 발생했습니다.", error);
    });
}
