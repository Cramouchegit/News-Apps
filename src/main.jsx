import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./pages/App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Gunakan Route untuk mendefinisikan rute */}
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<App />} />

        <Route path="/about" element={<div>This is about page</div>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
