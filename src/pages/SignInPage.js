import React from "react";
import SignInComponent from "../components/signin/signin";

const SignPage = (props) => (
  <div>
    <SignInComponent />
    <button onClick ={() => props.setUserState('john')}>Sign In</button>
  </div>
);

export default SignPage;
