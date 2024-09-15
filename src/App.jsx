import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/Aboutus/Aboutus";
import Home from "./Home";
import Projects from "./Projects";
import "./styles/App.module.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
