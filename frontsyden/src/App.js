import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/global.css";
import Navbar from "./components/ui/Navbar";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Patient from "./views/patient/Patient";
import Quote from "./views/quote/Quote"
import Inicio from "./views/inicio/Inicio"
import Inscription from "./views/inscription/Inscription"

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/patient" element={<Patient />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/inscription" element={<Inscription/>} />

    </Routes>
  );
}

export default App;
