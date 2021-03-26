import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "./globals.css";
import App from "./App";
import Header from "components/Header";
import GlobalProvider from "components/GlobalContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Router>
        <Header />
        <App />
      </Router>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
