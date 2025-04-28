import "./styles.css";
import React from "react";
import background from "../../assets/img/background.svg";

const Header = () => {
  return (
    <header>
      <img
        src={background}
        alt="background git"
        className="background-header"
      />

      <h1>GitFind</h1>
    </header>
  );
};
export { Header };
