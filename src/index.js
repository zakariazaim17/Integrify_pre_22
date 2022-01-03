import { render } from "react-dom";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./screens/Home";
import Detail from "./screens/Detail";

//this is the root navigation of the application

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="detail/:brewerieId" element={<Detail />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
