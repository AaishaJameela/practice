import React from "react";
import Button from "./Button";
import "../index.css";
const Header = ({ showForm, changeTextAndColor }) => {
  return (
    <header className="header">
      <h2 className="app-header">Employees</h2>
      <Button
        onClick={showForm}
        color={changeTextAndColor ? "red" : "green"}
        firstName={changeTextAndColor ? "Close" : "Add"}
      />
    </header>
  );
};
export default Header;
