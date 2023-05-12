import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { removeUid } from "../utils/uid";

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
    <div>
      <div>네비게이션바</div>
      <button type="button" onClick={logOut}>
        로그아웃
      </button>
    </div>
  );
}
