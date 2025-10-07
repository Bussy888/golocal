import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    const success = login(email, password);
    if (success) {
      if (email === "emprendedor@demo.com") navigate("/emprendedor");
      else navigate("/turista");
    } else {
      setError(true);
    }
  };

  return (
    <Container sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Iniciar Sesión
      </Typography>
      <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
        {error && <Alert severity="error">Credenciales incorrectas</Alert>}
        <TextField
          fullWidth
          label="Correo"
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
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleLogin}
        >
          Entrar
        </Button>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Demo:
          </Typography>
          <Typography variant="body2">🧑‍💼 Emprendedor — emprendedor@demo.com / 123456</Typography>
          <Typography variant="body2">🌍 Turista — turista@demo.com / 123456</Typography>
        </Box>
      </Box>
    </Container>
  );
}
