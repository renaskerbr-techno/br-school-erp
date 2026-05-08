import React from "react";
import ReactDOM from "react-dom/client";  // ✅ Make sure this is included
import App from "./App";
//import { HashRouter } from "react-router-dom";
import "./index.css";  // Import your CSS file
import {  BrowserRouter,} from "react-router-dom";


ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>
);