import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import About from "./components/page/About.jsx";
import RootLayout from "./components/layouts/RootLayout.jsx";

import MovieDetail from "./components/page/MovieDetail.jsx";
import Profile from "./components/page/Profile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route path="/" element={<App />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/Profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
