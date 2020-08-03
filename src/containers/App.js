import React, { useState } from "react";
import "./App.css";
// import SignInPage from "../pages/SignInPage";
// import ManagerPage from "../pages/ManagerPage";
// import { Route, Switch, Redirect } from "react-router-dom";
import Table from "../components/tables/tables";
import SignIn from "../components/signin/signin";
import {connect} from "react-redux"

function App(props) {
  let {currentUser} = props;

  return (
    <div className="App">
      {currentUser ?<Table />:<SignIn /> }
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(App);
