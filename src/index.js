import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/home/index.jsx";

import './styles.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);