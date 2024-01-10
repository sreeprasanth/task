import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  NavLink,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
