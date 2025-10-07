import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

export default function TuristaLayout() {
  return (
    <Box>
      <Navbar tipo="turista" />
      <Outlet />
      <Footer />
    </Box>
  );
}
