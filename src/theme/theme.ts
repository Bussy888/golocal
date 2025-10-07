import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D1491D", // azul turístico
    },
    secondary: {
      main: "#d2691e", // terracota cultural
    },
    background: {
      default: "#fafafa",
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif",
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
