// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/globals.css";
import  RouteProvider from "./context/RouteContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteProvider>
        <App />
        <ToastContainer position="top-center" theme="light" />
      </RouteProvider>
    </BrowserRouter>
  </React.StrictMode>
);
