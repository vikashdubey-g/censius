import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import PatternIcon from "../assets/svg/Pattern.svg";
import { colors } from "./colors";

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
      color: colors.caption,
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "17px",
    },
    body2: {
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "22px",
      color: colors.text,
    },
    body1: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "22px",
      color: colors.blue,
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
          backgroundColor: colors.cardBg,
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
