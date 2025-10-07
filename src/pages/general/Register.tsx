import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Register() {
  const [params] = useSearchParams();
  const role = params.get("role") as "emprendedor" | "turista";
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = () => {
    login(role);
    navigate(`/${role}`);
  };

  return (
    <Container sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Registro {role ? `de ${role}` : ""}
      </Typography>
      <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
        <TextField fullWidth label="Nombre completo" margin="normal" />
        <TextField fullWidth label="Correo electrónico" margin="normal" />
        <TextField fullWidth label="Contraseña" type="password" margin="normal" />
        <Button variant="contained" sx={{ mt: 3 }} onClick={handleRegister}>
          Registrarse
        </Button>
      </Box>
    </Container>
  );
}
