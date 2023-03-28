import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import Main from "./components/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
