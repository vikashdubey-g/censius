import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import PatternIcon from "../assets/svg/Pattern.svg";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: "Inter",

    caption: {
      color: "#6B7280",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "17px",
    },
    body2: {
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "22px",
      color: "#111827",
    },
    body1: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "22px",
      color: "#1D4ED8",
    },
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "48px 15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "10px",
          borderRadius: "12px",
          backgroundColor: "#EFF6FF",
          backgroundImage: `url(${PatternIcon})`,
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: "1px solid #9CA3AF",
          borderRadius: "8px",
          background: "#F3F4F6",
          width: "256px",
          height: "32px",
          fontFamily: "Inter",
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "17px",
        },
      },
    },
  },
});
