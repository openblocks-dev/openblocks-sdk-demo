import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "openblocks-sdk/dist/style.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
