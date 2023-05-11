import { useState } from "react";
import { useNavigate } from "react-router";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase-config";
import { userIdStore } from "../store/MainStore";

export default function useUserAuthFunction() {
  const navigate = useNavigate();
  const { setUserId } = userIdStore();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function checkUserAuthentication() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // logged in
        setIsLoggedIn(true);
        setUserId(user.uid);
        navigate("/mealTable");
      } else {
        // logged out
        setIsLoggedIn(false);
        navigate("/");
      }
    });
  }

  return { isLoggedIn, checkUserAuthentication };
}
