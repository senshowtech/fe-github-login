import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserPage from "./UserPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
