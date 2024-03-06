import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {BrowserRouter as Router} from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.css";
import "./styles/Nav.scss";
import "./styles/Main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
