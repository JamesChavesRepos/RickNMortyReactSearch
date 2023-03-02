import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FavoritesProvider from "./context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* TODO: Add FavoriteProvider */}
    <App />
  </React.StrictMode>
);
