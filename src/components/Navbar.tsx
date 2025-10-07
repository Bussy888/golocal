import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ tipo }: { tipo?: "emprendedor" | "turista" }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const menuItems =
    tipo === "emprendedor"
      ? [
          { label: "Inicio", to: "/emprendedor" },
          { label: "Contáctanos", to: "/emprendedor/contacto" },
        ]
      : [
          { label: "Inicio", to: "/turista" },
          { label: "Tours", to: "/turista/planes" },
          { label: "Guías", to: "/turista/guias" },
        ];

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          onClick={() => navigate("/")}
        >
          <img src="/golocal-logo.png" alt="GoLocal" style={{ height: 40 }} />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {menuItems.map((item) => (
            <Button key={item.to} color="inherit" component={Link} to={item.to}>
              {item.label}
            </Button>
          ))}

          {user ? (
            <>
              <Typography variant="body2" sx={{ color: "white" }}>
                {user.name}
              </Typography>
              <Button color="inherit" onClick={handleLogout}>
                Cerrar sesión
              </Button>
            </>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Iniciar sesión
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
