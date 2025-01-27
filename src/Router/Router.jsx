import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Productos } from "../pages/Productos/Productos";
import { Registro } from "../pages/Registro/Registro";
import { Login } from "../pages/Login/Login";
import { NotFound } from "../pages/NotFound/NotFound";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/productos" element={<Productos />}></Route>
        <Route path="/registro" element={<Registro />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export { RouterApp };
