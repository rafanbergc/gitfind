import React from "react";
import "./styles.css"
const Repository = ({title, description}) => {
  return (
    <div className="repository">
      <div className="content">
      <h5>{title}</h5>
      <p>{description}</p>
      </div>
      <hr />
    </div>
  );
};

export default Repository;
