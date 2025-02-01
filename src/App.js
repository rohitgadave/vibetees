import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <Router basename="/vibetees">
      <div className="App">
        <Header />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
