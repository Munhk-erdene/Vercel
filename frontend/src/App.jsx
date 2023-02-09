import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import React from "react";
import Login from "./Routes/Login";
import axios from "axios";
import Register from "./Routes/Register";
import Forget from "./Routes/Forget";
import HomeLogged from "./Routes/HomeLogged";
export const instance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Forget" element={<Forget />} />
        <Route path="/Home/:userid" element={<HomeLogged />} />
      </Routes>
    </div>
  );
}

export default App;
