import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { store } from "./store";
import { StoreProvider } from "easy-peasy";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </React.StrictMode>
  </BrowserRouter>
);
