import React from "react";
import ReactDOM from "react-dom/client"; // Note: updated import
import "./index.css";
import App from "./App";

// Create a root for React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app using the new API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
