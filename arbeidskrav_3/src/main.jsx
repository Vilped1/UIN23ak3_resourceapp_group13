import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// Tok vekk for å bruke egen sass
// import "./index.css";
import {BrowserRouter as Router} from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.css";
import "./styles/Nav.scss";
import "./styles/Main.scss";
// import "./styles/Style.scss"; //!!

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
