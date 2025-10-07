import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

export default function Register() {
  const [params] = useSearchParams();
  const role = params.get("role") as "emprendedor" | "turista";
  const { login } = useAuth();
  const navigate = useNavigate();

  // Estados locales
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    const success = login(email, password);
    if (success) {
      navigate(`/${role}`);
    } else {
      setError("Correo o contraseña incorrectos. Usa 123456 como contraseña demo.");
    }
  };

  return (
    <Container sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Registro {role ? `de ${role}` : ""}
      </Typography>
      <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
        <TextField
          fullWidth
          label="Nombre completo"
          margin="normal"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <TextField
          fullWidth
          label="Correo electrónico"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Contraseña"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography color="error" variant="body2" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
        <Button variant="contained" sx={{ mt: 3 }} onClick={handleRegister}>
          Registrarse
        </Button>
      </Box>
    </Container>
  );
}
