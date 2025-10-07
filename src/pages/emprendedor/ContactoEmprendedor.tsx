import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const terracota = "#d35400";
const terracotaOscuro = "#a04000";

export default function ContactoEmprendedor() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 10,
        color: "#fff",
        backgroundImage: `url('https://blackpepper.travel/cache/2023-12/viajes-bolivia-blackpepper-0031-galeria-2x-1008x671.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay oscuro para mejorar contraste */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.6)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Paper
          elevation={8}
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            backdropFilter: "blur(8px)",
            bgcolor: "rgba(255,255,255,0.95)",
          }}
        >
          {/* Lado izquierdo - Información */}
          <Box
            sx={{
              flex: 1,
              bgcolor: terracota,
              color: "#fff",
              p: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                ¿Quieres ser parte de GoLocal?
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Únete a nuestra comunidad de emprendedores turísticos y
                culturales. Comparte tu talento, conecta con viajeros y haz
                crecer tu negocio.
              </Typography>

              <Box sx={{ mt: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <MailOutlineIcon sx={{ mr: 1 }} /> contacto@golocal.com
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <PhoneIcon sx={{ mr: 1 }} /> +591 700-00000
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocationOnIcon sx={{ mr: 1 }} /> La Paz, Bolivia
                </Box>
              </Box>
            </motion.div>
          </Box>

          {/* Lado derecho - Formulario */}
          <Box sx={{ flex: 1, p: 5, bgcolor: "#fff", color: "#000" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                sx={{ color: terracotaOscuro, textAlign: "center" }}
              >
                Contáctanos
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mb: 4,
                  textAlign: "center",
                  color: "text.secondary",
                }}
              >
                Cuéntanos sobre ti, tus servicios o tus ideas. ¡Queremos
                conocerte!
              </Typography>

              <TextField fullWidth label="Nombre completo" margin="normal" />
              <TextField fullWidth label="Correo electrónico" margin="normal" />
              <TextField
                fullWidth
                label="Mensaje"
                multiline
                rows={4}
                margin="normal"
              />

              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    mt: 3,
                    bgcolor: terracota,
                    borderRadius: 3,
                    fontWeight: "bold",
                    "&:hover": { bgcolor: terracotaOscuro },
                  }}
                >
                  Enviar mensaje
                </Button>
              </motion.div>
            </motion.div>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
