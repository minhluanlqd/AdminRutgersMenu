import React, { useState } from "react";
import "./App.css";
import SignInPage from "../pages/SignInPage";
import ManagerPage from "../pages/ManagerPage";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  let [userState, setUserState] = useState("");
  console.log(userState)

  return (
    <div className="App">
         <Table/>
          {/* <SignIn/> */}
    </div>
  );
}

export default App;
