import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionType } from "./reducer";

function Login() {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) =>
      dispatch({
        type: actionType.SET_USER,
        user: result.user,
      }).catch((error) => alert(error.message))
    );
  };
  return (
    <div className="Login">
      <div className="Login_Container">
        <img
          src="https://t3.ftcdn.net/jpg/05/01/71/78/360_F_501717879_7RWecs3TL0zVJJXd7QAWzn39Z2CbEr4C.jpg"
          alt="logi"
        />
        <div className="login_text">
          <h1>Sign in to whatsapp</h1>
        </div>
        <Button onClick={signIn}>Sign in with google</Button>
      </div>
    </div>
  );
}

export default Login;
