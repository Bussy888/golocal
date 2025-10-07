import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Typography,
  Container,
  Button,
  Box,
  Grid,
  Paper
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PeopleIcon from "@mui/icons-material/People";
import PublicIcon from "@mui/icons-material/Public";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";

const terracota = "#d35400";
const terracotaOscuro = "#a04000";

export default function HomeEmprendedor() {
  const beneficios = [
    {
      icon: <CheckCircleIcon sx={{ color: terracota, fontSize: 40 }} />,
      title: "Publica sin intermediarios",
      text: "Ofrece tus tours, talleres o hospedajes de manera directa a turistas interesados.",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
    },
    {
      icon: <PublicIcon sx={{ color: terracota, fontSize: 40 }} />,
      title: "Alcance global",
      text: "Conecta con turistas locales e internacionales, aumentando tus oportunidades.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
    {
      icon: <StarIcon sx={{ color: terracota, fontSize: 40 }} />,
      title: "Destaca tus servicios",
      text: "Haz que tus experiencias brillen dentro de la comunidad de emprendedores culturales.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <PeopleIcon sx={{ color: terracota, fontSize: 40 }} />,
      title: "Comunidad activa",
      text: "Comparte conocimiento y colabora con otros emprendedores culturales y turísticos.",
      image:
        "https://radioluisdefuentes.com/wp-content/uploads/2025/08/turistas05.jpg",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
     

      {/* Hero */}
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          py: 18,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Bienvenido Emprendedor Cultural y Turístico
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Comparte tu creatividad, conecta con turistas y haz crecer tu negocio sin intermediarios.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Problema y solución */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.img
              src="https://crillontours.travel/wp-content/uploads/2018/08/1-esc130-lago-titicaca-crillon-1920x1080.jpg"
              alt="Turismo cultural"
              style={{ width: "100%", borderRadius: "16px" }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{ color: terracotaOscuro }}
              >
                ¿Por qué GoLocal?
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Publica tus servicios, llega a turistas auténticos y gestiona reservas de manera simple.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Tu trabajo brilla sin intermediarios y formas parte de una comunidad real.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Beneficios */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ color: terracotaOscuro }}
        >
          Beneficios de nuestra plataforma
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {beneficios.map((b, i) => (
            <Grid  size={{ xs: 12, md: 6 }} key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <Paper
                  elevation={4}
                  sx={{ p: 3, borderRadius: 3, textAlign: "center" }}
                >
                  <img
                    src={b.image}
                    alt={b.title}
                    style={{
                      width: "100%",
                      height: 180,
                      objectFit: "cover",
                      borderRadius: "12px",
                      marginBottom: "1rem",
                    }}
                  />
                  {b.icon}
                  <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
                    {b.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {b.text}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Llamado a la acción */}
      <Box sx={{ py: 10, textAlign: "center", bgcolor: "#fbe9e7" }}>
        <Container maxWidth="sm">
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: terracotaOscuro }}>
            ¿Listo para comenzar?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Publica tus servicios y conecta con turistas que buscan experiencias auténticas.
          </Typography>
          <Button
            href="/emprendedor/contacto"
            size="large"
            variant="contained"
            sx={{
              px: 5,
              py: 1.5,
              bgcolor: terracota,
              borderRadius: 3,
              fontWeight: "bold",
              "&:hover": { bgcolor: terracotaOscuro },
            }}
          >
            Contáctanos
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
