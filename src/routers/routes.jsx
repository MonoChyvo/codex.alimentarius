import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Almacen } from "../pages/Almacen";
import { Recetarios } from "../pages/Recetarios";

export const MyRoutes = () => {

  const storedItems = localStorage.getItem('Almacen');
  const initialItems = storedItems ? JSON.parse(storedItems) : { Frutas: [], Verduras: [] };
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    localStorage.setItem('Almacen', JSON.stringify(items));
  }, [items]);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home items={items} setItems={setItems} />} />
          <Route path="/almacen" element={<Almacen items={items} setItems={setItems} />} />
          <Route path="/recetarios" element={<Recetarios />} />
        </Routes>
      </Router>
    </>
  );
};