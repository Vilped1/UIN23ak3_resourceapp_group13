import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./styles/Main.scss"
import "./styles/Nav.scss"
import { BrowserRouter as Router } from "react-router-dom"
// Tok vekk index.css for å bruke egen sass

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
