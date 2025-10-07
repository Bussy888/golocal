import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tours = [
  {
    nombre: "Tour Salar de Uyuni",
    descripcion: "Explora el deslumbrante salar más grande del mundo con nuestros guías locales.",
    contacto: "Tel: +591 70012345 | Email: uyuni.tours@bolivia.com",
    imagen: "https://ecommerceapi.assistcard.com/Api/ImagesHandler/GetImage?freeImageCode=boliviauy1",
  },
  {
    nombre: "Tour La Paz Cultural",
    descripcion: "Sumérgete en la rica cultura y tradiciones de La Paz, visitando mercados y museos.",
    contacto: "Tel: +591 70054321 | Email: lapaz.cultura@bolivia.com",
    imagen: "https://lavozdetarija.com/wp-content/uploads/2023/07/Turismo-La-Paz.jpg",
  },
  {
    nombre: "Tour Amazónico en Rurrenabaque",
    descripcion: "Descubre la biodiversidad amazónica en Rurrenabaque con guías expertos.",
    contacto: "Tel: +591 70123456 | Email: amazonia.tours@bolivia.com",
    imagen: "https://www.turismo.produccion.gob.bo/wp-content/uploads/2022/12/madidi.jpg",
  },
];
export default function PlanesTurista() {
const [activeIndex, setActiveIndex] = useState(0);

  const activeTour = tours[activeIndex];
  const otherTours = tours.filter((_, index) => index !== activeIndex);

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tours.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "81.9vh",
        position: "relative",
        overflow: "hidden",
        color: "#fff",
      }}
    >
      {/* Slide principal */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundImage: `url(${activeTour.imagen})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Badge de recomendado */}
          <Box
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              backgroundColor: "#D1491D",
              color: "#ffff",
              px: 3,
              py: 2,
              borderRadius: 1,
              fontWeight: "bold",
              fontSize: "1.4rem",
            }}
          >
            Recomendado para ti
          </Box>

          {/* Información del tour */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              p: 4,
              backgroundColor: "rgba(0,0,0,0.5)",
              maxWidth: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" gutterBottom>
              {activeTour.nombre}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {activeTour.descripcion}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {activeTour.contacto}
            </Typography>
            <Button variant="contained" color="primary">
              Reservar ahora
            </Button>
          </Box>

          {/* Miniaturas en la parte inferior derecha */}
          <Box
            sx={{
              position: "absolute",
              bottom: 16,
              right: 16,
              display: "flex",
              gap: 2,
              overflowX: "auto",
              maxWidth: "60%",
              py: 1,
              px: 0.5,
              borderRadius: 0,
            }}
          >
            {otherTours.map((tour, index) => (
              <Box
                key={index}
                onClick={() => setActiveIndex(tours.indexOf(tour))}
                sx={{
                  minWidth: "30vh",
                  height: "20vh",
                  backgroundImage: `url(${tour.imagen})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: 2,
                  cursor: "pointer",
                  border: "1px solid #0000",
                  boxShadow: 4,
                  flexShrink: 1,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              />
            ))}
          </Box>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}