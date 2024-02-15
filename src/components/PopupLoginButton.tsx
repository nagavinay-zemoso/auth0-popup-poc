import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const PopupLoginButton = () => {
  const { loginWithPopup } = useAuth0();

  return <button onClick={() => loginWithPopup()}>Login with Popup</button>;
};

export default PopupLoginButton;
