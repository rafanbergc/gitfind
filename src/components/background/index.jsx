import "./styles.css";

import React from "react";
import background from "../../assets/img/background.svg";

const Background = () => {
  return (
    <div className="background-position">
      <img src={background} alt="background git" className="background" />
    </div>
  );
};

export default Background;
