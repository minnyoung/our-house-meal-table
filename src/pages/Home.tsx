import { useEffect, useState } from "react";

import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // logged in
        setIsLoggedIn(true);
        navigate("/mealTable");
      } else {
        // logged out
        setIsLoggedIn(false);
        navigate("/");
      }
    });
  }, []);

  async function clickGooglelogin() {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log("로그인 시 에러", error);
    }
  }

  return (
    <>
      {isLoggedIn && (
        <div>
          <div>우리집 식단표</div>
          <div>로그인</div>
          <button onClick={clickGooglelogin}>로그인</button>
        </div>
      )}
    </>
  );
}
