import React, { useState } from "react";
import "./App.css";
import SignInPage from "../pages/SignInPage";
import ManagerPage from "../pages/ManagerPage";
import { Route, Switch, Redirect } from "react-router-dom";
import Table from "../components/tables/tables";
import SignIn from "../components/signin/signin";

function App() {
  let [userState, setUserState] = useState("");
  console.log(userState);
  console.log(userState.token);

  return (
    <div className="App">
      {userState ?<Table setUserState={setUserState} token={userState.token} />:<SignIn setUserState={setUserState} /> }
    </div>
  );
}

export default App;
