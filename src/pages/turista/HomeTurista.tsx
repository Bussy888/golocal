import { Box, Typography, Button, Container, Grid,  Card, CardContent, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PublicIcon from "@mui/icons-material/Public";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";

// Colores
const terracota = "#d35400";
const terracotaOscuro = "#a04000";

// Datos de beneficios
const benefits = [
  {
    icon: <ExploreIcon sx={{ color: terracota, fontSize: 40 }} />,
    title: "Recomendaciones personalizadas",
    text: "Recibe sugerencias de tours, hospedajes y actividades que encajan contigo.",
    image: "https://revistaemporioempresarial.com/wp-content/uploads/2023/12/foti2.jpeg",
  },
  {
    icon: <FavoriteIcon sx={{ color: terracota, fontSize: 40 }} />,
    title: "Experiencias auténticas",
    text: "Conecta con guías y emprendedores locales que te mostrarán lo real.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9Mym3uGMQeN3FPvRqkfqlto-qZgmZcUp-w&s",
  },
  {
    icon: <PublicIcon sx={{ color: terracota, fontSize: 40 }} />,
    title: "Precios justos",
    text: "Reserva sin intermediarios ni comisiones ocultas.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/258167505.jpg?k=9ced2340fff52e35d65d99b83d1f931277da797e8d9f5ed6fdab1c2cb70fdb03&o=&hp=1",
  },
  {
    icon: <StarIcon sx={{ color: terracota, fontSize: 40 }} />,
    title: "Confianza",
    text: "Lee reseñas reales de otros viajeros antes de reservar.",
    image: "https://cdn.prod.website-files.com/60b550ccbb1a59f65dc28805/661e9559616f428a7fcab3af_como_eliminar_r4ese%C3%B1a_negativa.jpg",
  },
];

// Experiencias destacadas
const experiences = [
  {
    name: "Tour Salar de Uyuni",
    image: "https://blackpepper.travel/cache/2023-12/viajes-bolivia-blackpepper-0031-galeria-2x-1008x671.jpg",
    rating: 5,
    price: "Explora el desierto de sal más grande del mundo y vive paisajes únicos como un espejo infinito.",
  },
  {
    name: "Tour La Paz Cultural",
    image: "https://explanders.com/wp-content/uploads/2025/02/La-Paz_Umbrella-Street_Bolivia_1-1024x768.jpg",
    rating: 4,
    price: "Sumérgete en la rica cultura y tradiciones de La Paz, visitando mercados y museos.",
  },
  {
    name: "Tour Amazónico en Rurrenabaque",
    image: "https://cdn.bolivia.com/sdi/2020/01/17/turismo-destino-rurrenabaque-802591.jpg",
    rating: 5,
    price: "Descubre la biodiversidad amazónica en Rurrenabaque con guías expertos.",
  },
];



export default function HomeTurista() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Hero */}
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://unifranz.edu.bo/wp-content/uploads/2024/01/IMG_1448-1024x683.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          py: 20,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Explora el mundo con GoLocal 🌎
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Elige tu plan ideal o conoce a nuestros mejores guías turísticos.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
              <Button component={Link} to="/turista/planes" variant="contained" color="warning" sx={{ px: 4, py: 1.5, fontSize: "1rem" }}>
                Ver Tours
              </Button>
              <Button
                component={Link}
                to="/turista/guias"
                variant="outlined"
                color="inherit"
                sx={{ px: 4, py: 1.5, fontSize: "1rem", borderColor: "white", color: "white" }}
              >
                Ver Guías
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Beneficios visuales */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom sx={{ color: terracotaOscuro }}>
          ¿Por qué usar GoLocal?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {benefits.map((b, i) => (
            <Grid size={{ xs: 12, md: 6 }} key={i}>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: i * 0.2 }}>
                <Card sx={{ borderRadius: 3, overflow: "hidden", position: "relative" }}>
                  <Box
                    component="img"
                    src={b.image}
                    alt={b.title}
                    sx={{ width: "100%", height: 200, objectFit: "cover" }}
                  />
                  <CardContent sx={{ position: "absolute", bottom: 0, background: "rgba(0,0,0,0.5)", color: "#fff", width: "100%" }}>
                    {b.icon}
                    <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
                      {b.title}
                    </Typography>
                    <Typography variant="body2">{b.text}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Experiencias destacadas */}
      <Box sx={{ py: 12, bgcolor: "#fff3e0" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" fontWeight="bold" gutterBottom sx={{ color: terracotaOscuro }}>
            Experiencias destacadas
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {experiences.map((exp, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.2 }}>
                  <Card sx={{ borderRadius: 3 }}>
                    <Box component="img" src={exp.image} alt={exp.name} sx={{ width: "100%", height: 200, objectFit: "cover", borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold">{exp.name}</Typography>
                      <Rating value={exp.rating} readOnly size="small" />
                      <Typography color="text.secondary">{exp.price}</Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

     

      
    </Box>
  );
}
