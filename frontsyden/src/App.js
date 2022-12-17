import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Formulario } from "./components/Formulario";
import "./assets/global.css";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/formulario" exact element={<Formulario />} />
      </Routes>
    </Router>
  );
}
export default App;
