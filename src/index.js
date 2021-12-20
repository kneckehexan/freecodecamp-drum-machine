import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import ReactFCCTest from "react-fcctest";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ReactFCCTest />
  </React.StrictMode>,
  document.getElementById("root")
);
