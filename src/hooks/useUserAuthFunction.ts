import { useState } from "react";
import { useNavigate } from "react-router";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase-config";
import { removeUid, setUid } from "../utils/uid";
import { getDisplayManual, setDisplayManual } from "../utils/manualFunction";

export default function useUserAuthFunction() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isDisplayManual = getDisplayManual();

  function checkUserAuthentication() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // logged in
        setIsLoggedIn(true);
        setUid(user.uid);
        navigate("/mealTable");
      } else {
        // logged out
        setIsLoggedIn(false);
        removeUid();
        navigate("/");
      }
      if (!isDisplayManual) {
        setDisplayManual("true");
      }
    });
  }

  return { isLoggedIn, checkUserAuthentication };
}
