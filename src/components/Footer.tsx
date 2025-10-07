import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} GoLocal — Todos los derechos reservados.
      </Typography>
    </Box>
  );
}
