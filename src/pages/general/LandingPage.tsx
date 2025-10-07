import { Box, Container, Typography, Button, Grid, Card, CardContent, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Explore, Favorite, Public, Star } from "@mui/icons-material";
import { useEffect } from "react";

// Colores principales
const terracota = "#d35400";
const terracotaOscuro = "#a04000";

// Beneficios de la plataforma para emprendedores
const benefits = [
  {
    icon: <Explore sx={{ fontSize: 50, color: terracota }} />,
    title: "Promociona tus servicios",
    text: "Publica tus servicios de manera económica y accesible, sin depender de intermediarios caros.",
    image: "https://sohoapps.co/wp-content/uploads/2023/10/sobreventa-en-hotel.jpg",
  },
  {
    icon: <Favorite sx={{ fontSize: 50, color: terracota }} />,
    title: "Llega a los clientes correctos",
    text: "Conecta directamente con turistas interesados en experiencias auténticas, desde locales hasta internacionales.",
    image: "https://unifranz.edu.bo/wp-content/uploads/2025/05/BLOG-TURISMO-DE-OBSERVACION-FOTO-1.png",
  },
  {
    icon: <Public sx={{ fontSize: 50, color: terracota }} />,
    title: "Gestiona reservas fácilmente",
    text: "Recibe reservas y consultas de manera simple, sin complicaciones técnicas.",
    image: "https://cdn.prod.website-files.com/6423e8cf97045d0ac6e9ffb9/662f692b7d1a998ad141f81e_1690723531611.jpeg",
  },
  {
    icon: <Star sx={{ fontSize: 50, color: terracota }} />,
    title: "Únete a una comunidad",
    text: "Forma parte de una red de emprendedores culturales y turísticos para compartir conocimiento y oportunidades.",
    image: "https://radioluisdefuentes.com/wp-content/uploads/2025/08/turistas05.jpg",
  },
];

// Testimonios de emprendedores
const testimonials = [
  {
    name: "Laura M.",
    text: "Gracias a GoLocal mis tours llegaron a más turistas y pude manejar reservas sin depender de agencias.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Carlos T.",
    text: "Mi hospedaje empezó a recibir clientes internacionales que nunca hubiera alcanzado con métodos tradicionales.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Andrea S.",
    text: "Con GoLocal pude destacar mis eventos culturales y crear una comunidad de seguidores fieles.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate(`/${user.role}`);
    }
  }, [user, navigate]);

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Hero */}
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://bicentenario.bo/wp-content/uploads/2025/01/lake-ticicaca-e1484658328183.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Box component="img" src="/golocal-logo.png" alt="GoLocal" sx={{ height: 120, mb: 3 }} />
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}>
            Tu espacio digital para crecer y explorar
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, opacity: 0.9, textShadow: "1px 1px 6px rgba(0,0,0,0.5)" }}>
            Conecta emprendedores culturales con turistas que buscan experiencias auténticas.
          </Typography>
        </motion.div>

        <Box display="flex" justifyContent="center" gap={3} flexWrap="wrap">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="contained"
              color="warning"
              size="large"
              sx={{
                px: 5,
                py: 1.8,
                fontWeight: "bold",
                boxShadow: "0px 6px 15px rgba(0,0,0,0.3)",
                "&:hover": { backgroundColor: "#e67e22", transform: "scale(1.08)" },
              }}
              onClick={() => navigate("/login")}
            >
              Soy Emprendedor
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              sx={{
                px: 5,
                py: 1.8,
                fontWeight: "bold",
                borderColor: "#fff",
                color: "#fff",
                "&:hover": { borderColor: "#f1c40f", backgroundColor: "rgba(255,255,255,0.1)", transform: "scale(1.08)" },
              }}
              onClick={() => navigate("/login")}
            >
              Soy Turista
            </Button>
          </motion.div>
        </Box>
      </Box>

      {/* Beneficios */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom sx={{ color: terracotaOscuro }}>
          Beneficios de nuestra plataforma
        </Typography>
         <Grid container spacing={4}>
          {benefits.map((b, i) => (
            <Grid size={{ xs: 12 }} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0px 8px 20px rgba(0,0,0,0.5)",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={b.image}
                    alt={b.title}
                    sx={{
                      width: { xs: "100%", sm: 300 },
                      height: 200,
                      objectFit: "cover",
                    }}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Box sx={{ mb: 2 }}>{b.icon}</Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {b.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {b.text}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Cómo funciona */}
      <Box sx={{ py: 12, bgcolor: "#eedfcfff" }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: terracotaOscuro, textAlign: "center" }}>
            Cómo nuestra app impulsa tu negocio
          </Typography>
          <Typography variant="h6" sx={{ mt: 3, mb: 2, textAlign: "center" }}>
            Publica tus servicios, gestiona reservas y conecta directamente con clientes interesados. Destaca tus ofertas mediante planes premium, recibe reseñas de usuarios y forma parte de una comunidad activa de emprendedores culturales y turísticos.
          </Typography>
          <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
            GoLocal no solo es una app, es un ecosistema que permite que tus tours, eventos, hospedajes y creatividad lleguen a más personas de manera justa y rentable.
          </Typography>
        </Container>
      </Box>

      {/* Testimonios */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ textAlign: "center", color: terracotaOscuro }}>
          Qué dicen nuestros emprendedores
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {testimonials.map((t, i) => (
            <Grid size={{ xs: 12, sm: 4 }} key={i}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.2 }}>
                <Card sx={{ borderRadius: 3, p: 3, textAlign: "center" }}>
                  <Avatar src={t.avatar} sx={{ width: 56, height: 56, mx: "auto", mb: 2 }} />
                  <Typography fontWeight="bold">{t.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    "{t.text}"
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: terracota, color: "#fff", py: 4, textAlign: "center" }}>
        <Typography variant="body2">© {new Date().getFullYear()} GoLocal. Todos los derechos reservados.</Typography>
        <Typography variant="body2">Contacto: contacto@golocal.com | +591 123 456 789</Typography>
      </Box>
    </Box>
  );
}
