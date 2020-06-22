import React from "react";
import Table from "../components/tables/tables";

const ManagerPage = (props) => (
  <div>
    <Table />
    <button onClick={() => props.setUserState(null)}>Sign Out</button>
  </div>
);

export default ManagerPage;
