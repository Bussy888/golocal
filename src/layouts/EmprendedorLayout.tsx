import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

export default function EmprendedorLayout() {
  return (
    <Box>
      <Navbar tipo="emprendedor" />
      <Outlet />
      <Footer />
    </Box>
  );
}
