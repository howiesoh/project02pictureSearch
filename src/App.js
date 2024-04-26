import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Page404 from "./Page404";
import HomePage from "./HomePage";
import Layout from "./Layout";
import About from "./About";
import "./styles/style.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route
            path="https://howiesoh.github.io/project02pictureSearch/"
            element={<HomePage />}
          ></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
