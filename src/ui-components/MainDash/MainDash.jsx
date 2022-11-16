import React from "react";
import Cards from "../Cards/Cards";
//import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Current Backlog</h1>
      <Cards />
      <Cards /> 
    </div>
  );
};

export default MainDash;
