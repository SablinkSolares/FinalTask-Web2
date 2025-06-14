import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Menu from "./Menu.jsx";
import MenuOne from "./MenuOne.jsx";
import Acordeon from "./Acordeon.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
<StrictMode>
  <BrowserRouter>
  <MenuOne></MenuOne>
  <Menu></Menu>
  </BrowserRouter>
  <Acordeon></Acordeon>
</StrictMode>
);
