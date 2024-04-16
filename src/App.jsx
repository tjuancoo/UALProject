// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {
  // Estado para controlar la visibilidad de los títulos en el Navbar
  const [showTitles, setShowTitles] = useState(false);

  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Pasa la función setShowTitles al Navbar */}
        <Navbar showTitles={showTitles} />
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* Utiliza "element" en lugar de "component" */}
          <Route
            path="/home"
            element={<Home setShowTitles={setShowTitles} />}
          />
          {/* Utiliza "element" en lugar de "component" */}
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
