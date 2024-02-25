import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ApiContextProvider from "./context/ApiContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiContextProvider>
  </React.StrictMode>
);
