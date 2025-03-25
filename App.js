import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/main/Main";
function App() {
  const [value, onChange] = useState(new Date()); // 초기값은 현재 날짜

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
