import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/general/LandingPage";
import Login from "../pages/general/Login";
import Register from "../pages/general/Register"; // aunque sea demo
import HomeEmprendedor from "../pages/emprendedor/HomeEmprendedor";
import ContactoEmprendedor from "../pages/emprendedor/ContactoEmprendedor";
import HomeTurista from "../pages/turista/HomeTurista";
import EmprendedorLayout from "../layouts/EmprendedorLayout";
import TuristaLayout from "../layouts/TuristaLayout";
import PlanesTurista from "../pages/turista/PlanesTurista";
import GuiasTurista from "../pages/turista/GuiasTurista";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Página de inicio general */}
        <Route path="/" element={<LandingPage />} />

        {/* Login y Register */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Sección Emprendedor */}
        <Route element={<EmprendedorLayout />}>
          <Route path="/emprendedor" element={<HomeEmprendedor />} />
          <Route path="/emprendedor/contacto" element={<ContactoEmprendedor />} />
        </Route>

        {/* Sección Turista */}
        <Route element={<TuristaLayout />}>
          <Route path="/turista" element={<HomeTurista />} />
          {/* Si agregas planes o guías como páginas independientes */}
          <Route path="/turista/planes" element={<PlanesTurista />} />
          <Route path="/turista/guias" element={<GuiasTurista />} />
        </Route>
      </Routes>
    </Router>
  );
}
