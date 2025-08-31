import { useState } from "react";
import "./App.css";
import { QrCode } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import AppPage from "./pages/AppPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registration/*" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppPage />} />
      </Routes>
    </>
  );
}

export default App;
