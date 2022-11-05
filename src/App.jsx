import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
