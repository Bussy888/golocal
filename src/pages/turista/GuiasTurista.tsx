import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const guias = [
  {
    nombre: "Luis Gómez",
    especialidad: "Turismo de Aventura",
    foto: "https://tusguiasdeviaje.com/wp-content/uploads/2017/06/1-Qu%C3%A9-hacer-y-qu%C3%A9-ver-en-Bolivia.jpg",
    precio: "$50 / tour",
    lugares: ["La Paz", "Uyuni", "Sucre"],
  },
  {
    nombre: "María Pérez",
    especialidad: "Hiking y Trekking",
    foto: "https://irishontherun.com/wp-content/uploads/2019/08/LRM_EXPORT_3101158335984_20190712_180411101.jpeg",
    precio: "$40 / tour",
    lugares: ["Potosí", "Tarija", "Cochabamba"],
  },
  {
    nombre: "Andrés Ruiz",
    especialidad: "Gastronomía Regional",
    foto: "https://elperuano.pe/fotografia/thumbnail/2024/11/04/000316950M.jpg",
    precio: "$45 / tour",
    lugares: ["Santa Cruz", "La Paz", "Sucre"],
  },
];

export default function GuiasTurista() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeGuia = guias[activeIndex];
  const otherGuias = guias.filter((_, i) => i !== activeIndex);

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % guias.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "81.9vh",
        position: "relative",
        color: "#fff",
        overflow: "hidden",
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
            backgroundImage: `url(${activeGuia.foto})`,
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
              color: "#fff",
              px: 3,
              py: 2,
              borderRadius: 1,
              fontWeight: "bold",
              fontSize: "1.4rem",
            }}
          >
            Recomendado para ti
          </Box>

          {/* Información del guía */}
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
            <Typography variant="overline" sx={{ color: "#FFD700", mb: 2 }}>
              Guía experto
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: "bold", mb: 1 }}>
              {activeGuia.nombre}
            </Typography>
            <Typography variant="h5" sx={{ mb: 2 }}>
              {activeGuia.especialidad}
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Precio: {activeGuia.precio}
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Lugares: {activeGuia.lugares.join(", ")}
            </Typography>
            <Button variant="contained" color="warning">
              Ver perfil
            </Button>
          </Box>

          {/* Miniaturas de otros guías */}
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
            {otherGuias.map((guia, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03, y: -5 }}
                onClick={() => setActiveIndex(guias.indexOf(guia))}
                style={{
                  minWidth: "30vh",
                  height:   "20vh",
                  backgroundImage: `url(${guia.foto})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: 5,
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                }}
              />
            ))}
          </Box>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}
