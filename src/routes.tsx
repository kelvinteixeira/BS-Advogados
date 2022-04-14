import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Screens/HomePage/HomePage";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer";

export function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
