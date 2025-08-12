// src/App.jsx

import React from "react"; // Good practice to keep
import Navbar from "./components/Navbar"; // Make sure this path is correct for your Navbar.jsx location
import carousel from "./components/carousel";

function App() {
  return (
    <>
      <Navbar />
      <carousel />
    </>
  );
}

export default App;
