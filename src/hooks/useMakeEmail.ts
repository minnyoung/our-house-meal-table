import React, { useState } from "react";

export default function useMakeEmail() {
  const [userEmail, setUserEmail] = useState("");
  const [isConfirmEmail, setIsConfirmEmail] = useState(false);

  function handleEmailInput(event: React.ChangeEvent<HTMLInputElement>) {
    setUserEmail(event.currentTarget.value);
    checkEmail(event.currentTarget.value);
  }
  function checkEmail(userEmail: string) {
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (emailRegex.test(userEmail)) {
      setIsConfirmEmail(true);
    } else setIsConfirmEmail(false);
  }

  return { userEmail, isConfirmEmail, handleEmailInput };
}
